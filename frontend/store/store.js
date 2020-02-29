import RootReducer from '../reducers/root_reducer';
import NewestRootReducer from '../reducers/newest_root_reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState={}) => (
  // createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
  createStore(NewestRootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;