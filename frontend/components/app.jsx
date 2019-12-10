import React from 'react';
import UsersIndexContainer from './users/users_index_container';
import UserFormContainer from './users/user_form_container';

const App = () => {
  return (
    <div>
      <UsersIndexContainer/>
      <UserFormContainer/>
    </div>
  )
};

export default App;