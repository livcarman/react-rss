/**
 * Sagas that handle RSS feed management
 */

import { eventChannel } from 'redux-saga';
import { all, call, cancel, fork, put, take } from 'redux-saga/effects';

import { authActions, feedActions } from '../actions';
import { FeedList } from '../models';
import RSSParser from '../lib/rss-parser';

// ============================================================================
// Sagas
// ----------------------------------------------------------------------------

function subscribe() {
  return eventChannel((emit) => FeedList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

function* refreshFeed(feed) {
  // Many RSS feeds require CORS headers that are not present in webpack's dev
  // server, so we use a proxy server in development to add them.
  const CORS_PROXY = process.env.NODE_ENV !== 'production' ?
    'http://127.0.0.1:8080/' : 'https://cryptic-stream-54074.herokuapp.com/';

  const parser = new RSSParser();

  try {
    const stories = yield call(
      [parser, parser.parseURL],
      CORS_PROXY + feed.url
    );
    yield put(feedActions.refreshFeedFulfilled(feed, stories));
  }
  catch (error) {
    yield put(feedActions.refreshFeedFailed(error));
  }
}

const createFeed = write.bind(
  null,
  FeedList,
  FeedList.push,
  feedActions.createFeedFailed
);

const deleteFeed = write.bind(
  null,
  FeedList,
  FeedList.remove,
  feedActions.deleteFeedFailed
);

// ============================================================================
//  Watchers
// ----------------------------------------------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);

    FeedList.path = `feeds/${payload.user.uid}`;
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_FULFILLED]);
    yield cancel(job);
  }
}

function* watchCreateFeed() {
  while (true) {
    let { payload } = yield take(feedActions.CREATE_FEED);
    yield fork(createFeed, payload.feed);
  }
}

function* watchDeleteFeed() {
  while (true) {
    let { payload } = yield take(feedActions.DELETE_FEED);
    yield fork(deleteFeed, payload.feed.key);
  }
}

function* watchRefreshFeed() {
  while (true) {
    let { payload } = yield take(feedActions.REFRESH_FEED);
    yield fork(refreshFeed, payload.feed);
  }
}

function* watchLoadFeeds() {
  while (true) {
    let { payload } = yield take(feedActions.LOAD_FEEDS_FULFILLED);
    yield all(payload.feeds.map((feed) => fork(refreshFeed, feed)));
  }
}

// ============================================================================
//  Combined Saga (Export)
// ----------------------------------------------------------------------------

export const feedSagas = [
  fork(watchAuthentication),
  fork(watchCreateFeed),
  fork(watchDeleteFeed),
  fork(watchRefreshFeed),
  fork(watchLoadFeeds),
];
