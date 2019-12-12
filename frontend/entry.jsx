import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import sampleState from './store/sample_state';
import { signupUser, receiveUser } from './actions/users_actions';
// import { receiveUser } from './actions/users_actions';
// import openModal from './actions/modal_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  let pls = {};
  let UErrors = {};
  let SErrors = {};
  // debugger;
  if (window.currentuser){
    pls = {
      entities: {
        users: {
          [currentuser.id] : currentuser
        }
      },
      errors: {
        sessionErrors: [],
        usersErrors: []
      },
      session: {
        currentUser: currentuser.id
      },
      ui:{
        modal: null
      }
    };
    store = configureStore(pls);
  }else{
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // 
  // window.dispatch = store.dispatch;
  // window.receiveUser = receiveUser;
  window.state = store.getState;
  // window.signupUser = signupUser;
  // 
});