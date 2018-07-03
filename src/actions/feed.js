/**
 * Actions & constants related to RSS feeds.
 */

export const feedActions = {
  CREATE_FEED: 'CREATE_FEED',
  CREATE_FEED_FAILED: 'CREATE_FEED_FAILED',
  CREATE_FEED_FULFILLED: 'CREATE_FEED_FULFILLED',

  DELETE_FEED: 'DELETE_FEED',
  DELETE_FEED_FAILED: 'DELETE_FEED_FAILED',
  DELETE_FEED_FULFILLED: 'DELETE_FEED_FULFILLED',

  REFRESH_FEED: 'REFRESH_FEED',
  REFRESH_FEED_FAILED: 'REFRESH_FEED_FAILED',
  REFRESH_FEED_FULFILLED: 'REFRESH_FEED_FULFILLED',

  LOAD_FEEDS_FULFILLED: 'LOAD_FEEDS_FULFILLED',

  createFeed: (title, url) => ({
    type: feedActions.CREATE_FEED,
    payload: {feed: {title, url, stories: []}}
  }),

  createFeedFailed: (error) => ({
    type: feedActions.CREATE_FEED_FAILED,
    payload: {error}
  }),

  createFeedFulfilled: (feed) => ({
    type: feedActions.CREATE_FEED_FULFILLED,
    payload: {feed}
  }),

  deleteFeed: (feed) => ({
    type: feedActions.DELETE_FEED,
    payload: {feed}
  }),

  deleteFeedFailed: (error) => ({
    type: feedActions.DELETE_FEED_FAILED,
    payload: {error}
  }),

  deleteFeedFulfilled: (feed) => ({
    type: feedActions.DELETE_FEED_FULFILLED,
    payload: {feed}
  }),

  refreshFeed: (feed) => ({
    type: feedActions.REFRESH_FEED,
    payload: {feed}
  }),

  refreshFeedFailed: (error) => ({
    type: feedActions.REFRESH_FEED_FAILED,
    payload: {error}
  }),

  refreshFeedFulfilled: (feed, stories) => ({
    type: feedActions.REFRESH_FEED_FULFILLED,
    payload: {feed, stories}
  }),

  loadFeedsFulfilled: (feeds) => ({
    type: feedActions.LOAD_FEEDS_FULFILLED,
    payload: {feeds}
  })
};
