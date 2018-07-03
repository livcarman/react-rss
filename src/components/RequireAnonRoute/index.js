/**
 * Extends react-router-dom's Route class to redirect authenticated users to
 * their landing page.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequireAnonRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      return authenticated ? (
        <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
      ) : (
        <Component {...props}/>
      )
    }}
  />
);

export default RequireAnonRoute;
