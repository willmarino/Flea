import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProductsReducer from './products_reducer';
import ShopsReducer from './shops_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  shops: ShopsReducer
});

export default EntitiesReducer;