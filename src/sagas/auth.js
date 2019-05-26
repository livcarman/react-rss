/**
 * Sagas that handle async authentication tasks
 */

import { call, fork, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { authActions } from '../actions';
import { firebaseAuth } from '../firebase';

// ============================================================================
// Sagas
// ----------------------------------------------------------------------------

function* signIn(provider) {
  try {
    const data = yield call(
      [firebaseAuth, firebaseAuth.signInWithPopup],
      provider
    );
    yield put(authActions.signInFulfilled(data.user));
    yield put(push('/'));
  }
  catch (error) {
    yield put(authActions.signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.signOutFulfilled());
    yield put(push('/sign-in'));
  }
  catch (error) {
    yield put(authActions.signOutFailed(error));
  }
}

// ============================================================================
//  Watchers
// ----------------------------------------------------------------------------

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN);
    yield fork(signIn, payload.provider);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT);
    yield fork(signOut);
  }
}


// ============================================================================
//  Combined Saga (Export)
// ----------------------------------------------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];
