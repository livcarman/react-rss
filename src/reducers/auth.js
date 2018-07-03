/**
 * Reducer for user authentication status
 */

import { Record } from 'immutable';
import { createSelector } from 'reselect';

import { authActions } from '../actions';

export const AuthState = new Record({
  authenticated: false,
  user: null,
});

export function authReducer(state = new AuthState(), {payload, type}) {
  switch (type) {
    case authActions.SIGN_IN_FULFILLED:
      return state.merge({
        authenticated: true,
        user: payload,
      });

    case authActions.SIGN_OUT_FULFILLED:
      return state.merge({
        authenticated: false,
        user: null
      });

    default:
      return state;
  }
}

export function isAuthenticated(state) {
  return state.auth.authenticated;
}

export const getAuth = createSelector(
  (state) => state.auth,
  (auth) => auth.toJS()
);
