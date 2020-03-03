import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let pls = {};
  
  if (window.currentuser){
    pls = {
      entities: {
        users: {
          [currentuser.id] : currentuser
        },
        products: {
          
        },
        shops: {

        },
        carts: {

        },
        cartItems: {

        },
        reviews: {

        },
        categories: {

        }
      },
      errors: {
        sessionErrors: [],
        userErrors: []
      },
      session: {
        currentUser: currentuser
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

  window.state = store.getState;
});