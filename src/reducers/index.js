/**
 * Reducers control how redux actions (what happened) translate to changes in
 * the application's state (what changed).
 *
 * Selectors are used to make it easier to read useful data from the app's
 * state without needing to have knowledge of the state's structure. This
 * reduces the coupling between reducers and other parts of the app's codebase.
 *
 * See: https://redux.js.org/basics/reducers
 * See: https://github.com/reduxjs/reselect
 */

export { authReducer, getAuth, isAuthenticated } from './auth';
export { feedReducer, feedsLoading, getFeeds, getFeedList } from './feed';
