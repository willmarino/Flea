import React from 'react';
import { Route, Link} from 'react-router-dom';
import UsersIndexContainer from './users/users_index_container';
import UserFormContainer from './users/user_form_container';
import UserLoginContainer from './users/user_login_container';
import ModalContainer from './modal/modal_container';
import HeaderContainer from './headers/header_container';
import {ProtectedRoute} from '../util/route_util';

const App = () => {
  return (
    <div>
      <Route exact path="/">
        <HeaderContainer/>
        <ModalContainer/>
        <UsersIndexContainer/>
      </Route>
      <ProtectedRoute exact path="/home" component={HeaderContainer}/>
    </div>
  )
};

export default App;