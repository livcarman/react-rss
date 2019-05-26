/**
 * The app's reducer describes how the app's state changes in response to
 * actions that have been sent to its redux store.
 *
 * This single, combined reducer merges all of the first- and third-party
 * reducers the app uses into a single reducer for the entire app. The shape
 * of the object passed to `combineReducers` determines the shape of the app's
 * state.
 *
 * See: https://redux.js.org/basics/reducers
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { authReducer, feedReducer } from './reducers';

export default history => combineReducers({
  auth: authReducer,
  feeds: feedReducer,
  router: connectRouter(history),
});
