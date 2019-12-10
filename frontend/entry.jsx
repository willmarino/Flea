import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import sampleState from './store/sample_state';
import { signupUser } from './actions/users_actions';
import { receiveUser } from './actions/users_actions';

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // 
  // window.dispatch = store.dispatch;
  // window.receiveUser = receiveUser;
  window.state = store.getState;
  // window.signupUser = signupUser;
  // 
});