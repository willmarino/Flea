// if we are logged in, we want to render the UserHeaderContainer
// if we are not logged in, we want to render the AnonHeaderContainer and the Modal for login and signup

// There is currently a protected route redirecting anons to "/" if they attempt to visit the user home page
// Also needed is an Auth or Prot route which redirects users to their home if they try to login

// no real splash page, just different types of 'base' pages


import React from 'react';
import { Route, Link} from 'react-router-dom';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import AnonMain from './main/anon_main';
import UserMain from './main/user_main';
import Test from './headers/test_header';

// if user is logged in, they will hit the "/" path and go on to userMain,
// if they try to go to the anon page while logged in they will be pushed back
// same in reverse for the "anon" page, for users who are not logged in.

const App = () => {
  // debugger;
  return (
    <div>
      <AuthRoute exact path="/anon" component={AnonMain}/>
      <ProtectedRoute exact path="/" component={UserMain}/>
      <Route exact path="/test" component={Test}/>
    </div>
  )
};

export default App;