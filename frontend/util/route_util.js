import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/"/>
    )
  )}
  />);

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/home"/>
    )
  )}
  />);

  const msp = state => ({
    loggedIn: Boolean(state.session.id)
  });

  export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
  export const AuthRoute = withRouter(connect(msp, null)(Auth));