/**
 * The app's outermost wrapper, responsible for declaring the app's routes and
 * for controlling the user's access to routes that require authentication.
 */

import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import RequireAnonRoute from '../../components/RequireAnonRoute';
import RequireUserRoute from '../../components/RequireUserRoute';
import { authActions } from '../../actions';
import { getAuth } from '../../reducers';

import './App.css';

const FeedPage = lazy(() => import('../FeedPage'));
const SignInPage = lazy(() => import('../SignInPage'));

const App = ({authenticated, signOut}) => (
  <div className="App">
    <Header
      authenticated={authenticated}
      signOut={signOut}
    />
    <main>
      <Suspense fallback={<LoadingIndicator/>}>
        <RequireUserRoute
          authenticated={authenticated}
          exact
          path="/"
          component={FeedPage}
        />
        <RequireAnonRoute
          authenticated={authenticated}
          path="/sign-in"
          component={SignInPage}
        />
      </Suspense>
    </main>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
