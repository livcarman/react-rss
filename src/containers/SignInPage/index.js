/**
 * The landing page for unauthenticated users.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button';
import IconGitHub from '../../components/IconGitHub';
import IconGoogle from '../../components/IconGoogle';
import { authActions } from '../../actions';

import './SignInPage.css';

const SignInPage = ({signInWithGithub, signInWithGoogle}) => {
  return (
    <div className="SignInPage">
      <div className="SignInPage__card">
        <h2 className="SignInPage__subhead">Sign in</h2>
        <Button
          className="SignInPage__button"
          onClick={signInWithGithub}
          Icon={IconGitHub}
        >
          Sign in with GitHub
        </Button>
        <br/>
        <Button
          className="SignInPage__button"
          onClick={signInWithGoogle}
          Icon={IconGoogle}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
};

export default withRouter(
    connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
