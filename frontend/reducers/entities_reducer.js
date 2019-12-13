import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProductsReducer from './products_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer
});

export default EntitiesReducer;