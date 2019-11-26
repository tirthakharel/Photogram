import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authState from './apiAuth';

const RouteProtector = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      authState.authenticated()
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

export default RouteProtector;
