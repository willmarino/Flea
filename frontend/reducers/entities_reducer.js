import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  Users: UsersReducer
});

export default EntitiesReducer;