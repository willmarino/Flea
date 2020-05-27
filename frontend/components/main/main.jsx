import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';

import AnonMain from './main_pages/anon_main';
import UserMainContainer from './main_pages/user_main_container';

const Main = () => {
  return(
    <Switch>
      <AuthRoute path="/anon" component={AnonMain}/>
      <ProtectedRoute path="/" component={UserMainContainer}/>
    </Switch>
  )
}

export default Main;