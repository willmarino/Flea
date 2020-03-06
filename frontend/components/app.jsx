import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import AnonMain from './main/anon_main';
import UserMain from './main/user_main';

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <AuthRoute path="/anon" component={AnonMain}/>
        <ProtectedRoute path="/" component={UserMain}/>
      </Switch>
    </div>
  )
};

export default App;