import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signupUser } from './actions/users_actions';

document.addEventListener("DOMContentLoaded", () => {


  const store = configureStore(pls);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // 

  window.state = store.getState;
  window.signupUser = signupUser;
  // 
});