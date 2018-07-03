/**
 * Actions & constants related to user authentication.
 */

import firebase from 'firebase/app';

export const authActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_IN_FULFILLED: 'SIGN_IN_FULFILLED',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',
  SIGN_OUT_FULFILLED: 'SIGN_OUT_FULFILLED',

  // Dispatched when the user authenticates with the given OAuth provider
  signIn: (provider) => ({
    type: authActions.SIGN_IN,
    payload: {provider},
  }),

  // Dispatched when OAuth sign in failed
  signInFailed: (error) => ({
    type: authActions.SIGN_IN_FAILED,
    payload: {error}
  }),

  // Dispatched when OAuth sign in succeeded
  signInFulfilled: (user) => ({
    type: authActions.SIGN_IN_FULFILLED,
    payload: {user}
  }),

  // Dispatched when the user signs in with Google's OAuth provider
  signInWithGithub: () => authActions.signIn(
    new firebase.auth.GithubAuthProvider()
  ),

  // Dispatched when the user signs in with GitHub's OAuth provider
  signInWithGoogle: () => authActions.signIn(
    new firebase.auth.GoogleAuthProvider()
  ),

  // Dispatched when the user signs out
  signOut: () => ({
    type: authActions.SIGN_OUT
  }),

  // Dispatched when the user's sign out request fails
  signOutFailed: (error) => ({
    type: authActions.SIGN_OUT_FAILED,
    payload: {error}
  }),

  // Dispatched when the user's sign in request succeeds
  signOutFulfilled: () => ({
    type: authActions.SIGN_OUT_FULFILLED
  })
};
