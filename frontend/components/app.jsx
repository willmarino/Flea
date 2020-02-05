import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import AnonMainContainer from './main/anon_main_container';
import UserMainContainer from './main/user_main_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path="/anon" component={AnonMainContainer}/>
        <ProtectedRoute path="/" component={UserMainContainer}/>
      </Switch>
    </div>
  )
};

export default App;