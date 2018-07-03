/**
 * A "saga" is a bit like a separate thread in the app that's responsible for
 * handling side effects (things like asynchronously fetching data from an API
 * server or accessing the browser's cache). Sagas hook into redux's middleware
 * system and can be started, stopped, or paused from redux actions.
 *
 * This single, combined saga is started when the redux store is first created.
 *
 * See: https://redux-saga.js.org/
 */

import { all } from 'redux-saga/effects';

import { authSagas, feedSagas } from './sagas';

export default function* sagas() {
  yield all([
    ...authSagas,
    ...feedSagas,
  ]);
}
