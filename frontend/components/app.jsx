import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import AnonMain from './main/anon_main';
import UserMainContainer from './main/user_main_container';

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <AuthRoute path="/anon" component={AnonMain}/>
        <ProtectedRoute path="/" component={UserMainContainer}/>
      </Switch>
    </div>
  )
};

export default App;