import RootReducer from '../reducers/root_reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// const pls = {
//   u1: { username: "will", password: "whereisthis", email: "@mail.com", description: "this is me", location: "nyc" }
// };

const configureStore = (preloadedState={}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;