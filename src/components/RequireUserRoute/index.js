/**
 * Extends react-router-dom's Route class to redirect anonymous users to
 * the sign in page.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequireUserRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      return !authenticated ? (
        <Redirect to={{
          pathname: '/sign-in',
          state: {from: props.location}
        }}/>
      ) : (
        <Component {...props}/>
      )
    }}
  />
);

export default RequireUserRoute;
