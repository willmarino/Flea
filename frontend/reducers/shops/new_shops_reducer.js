import { combineReducers } from 'redux';
import MainShopsReducer from './main_shops_reducer';
import ShopsByProductsReducer from './shop_by_products_reducer';

const NewShopsReducer = combineReducers({
  main : MainShopsReducer,
  byProducts : ShopsByProductsReducer
})

export default NewShopsReducer;