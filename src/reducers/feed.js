/**
 * Reducer for RSS Feed subscription
 */

import { List, Record } from 'immutable';

import { feedActions } from '../actions';

export const FeedState = new Record({
  isLoading: true,
  list: new List()
});

export function feedReducer(state = new FeedState(), {payload, type}) {
  switch (type) {
    case feedActions.CREATE_FEED:
    case feedActions.REFRESH_FEED:
      return state.set('isLoading', true)

    case feedActions.CREATE_FEED_FULFILLED:
      return state.merge({
        isLoading: false,
        list: state.list.unshift(payload.feed)
      });

    case feedActions.LOAD_FEEDS_FULFILLED:
      return state.merge({
        isLoading: false,
        list: new List(payload.feeds.reverse())
      });

    case feedActions.DELETE_FEED_FULFILLED:
      return state.set('list', state.list.filter((feed) => {
        return feed.key !== payload.feed.key;
      }));

    case feedActions.REFRESH_FEED_FULFILLED:
      return state.merge({
        isLoading: false,
        list: state.list.map((feed) => {
          if (feed.key === payload.feed.key) {
            return payload.feed.set('stories', payload.stories.items);
          }

          return feed;
        })
      });

    default:
      return state;
  }
}

export function feedsLoading(state) {
  return state.feeds.isLoading;
}

export function getFeeds(state) {
  return state.feeds;
}

export function getFeedList(state) {
  return getFeeds(state).list;
}
