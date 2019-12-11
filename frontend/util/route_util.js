import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// protected/auth routes take in props and return a route,
// which has a render function which takes in props and returns
// either a component which was passed as props,
// or a redirect


const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/anon"/>
    )
  )}
  />);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )}
  />);


const msp = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
export const AuthRoute = withRouter(connect(msp, null)(Auth));