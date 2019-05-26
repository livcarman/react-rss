/**
 * The app's single point of entry, where the application is bootstrapped and
 * rendered.
 */

// Polyfill for ES2015 generators in IE11 (required for redux-saga)
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import configureStore from './store';
import App from './containers/App';
import { authActions } from './actions';
import { firebaseAuth } from './firebase';

import 'normalize.css';
import './global.css';

// A redux store, the single source of truth for the app's state
const store = configureStore();

// The application's mount point, a DOM element in ../public/index.html
const rootElement = document.getElementById('root');

/**
 * Render the given React component at the application's mount point.
 */
function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component/>
      </ConnectedRouter>
    </Provider>,
    rootElement
  )
}

/**
 * Determine the user's authentication status and dispatch the appropriate
 * action(s).
 *
 * The user's auth status must be known before the app renders (so that, e.g.,
 * authenticated users aren't redirected to the login page after a browser
 * refresh). This function should be called before rendering the app.
 */
function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (user) => {
        if (user) {
          dispatch(authActions.signInFulfilled(user));
        }

        resolve();
        unsubscribe();
      },

      (error) => reject(error)
    );
  });
}

// Enable hot module replacement (HMR) for the <App/> component
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(require('./containers/App').default);
  });
}

// Render the app after determining the user's auth status
initAuth(store.dispatch)
  .then(() => render(App))
  .catch((error) => console.error(error));
