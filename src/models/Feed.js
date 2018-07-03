/**
 * An RSS feed stored in Firebase's database
 */

import { Record } from 'immutable';

import { feedActions } from '../actions';
import { FirebaseList } from './FirebaseList';

export const Feed = new Record({
  key: null,
  title: null,
  url: null,
  stories: [],
});

export const FeedList = new FirebaseList({
  onAdd: feedActions.createFeedFulfilled,
  onChange: feedActions.updateFeedFulfilled,
  onLoad: feedActions.loadFeedsFulfilled,
  onRemove: feedActions.deleteFeedFulfilled
}, Feed);
