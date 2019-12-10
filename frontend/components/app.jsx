import React from 'react';
import UsersIndexContainer from './users/users_index_container';
import UserFormContainer from './users/user_form_container';
import UserLoginContainer from './users/user_login_container';
import ModalContainer from './modal/modal_container';
import HeaderContainer from './headers/header_container';

const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <ModalContainer/>
      <UsersIndexContainer/>
    </div>
  )
};

export default App;