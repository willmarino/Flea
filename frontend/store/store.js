import RootReducer from '../reducers/root_reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const configureStore = (preloadedState={}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;