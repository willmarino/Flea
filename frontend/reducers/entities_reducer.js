import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  users: UsersReducer
});

export default EntitiesReducer;