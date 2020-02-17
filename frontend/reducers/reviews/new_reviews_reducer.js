import { combineReducers } from 'redux';
import ReviewsByProductReducer from './reviews_by_product_reducer';
import ReviewsByShopReducer from './reviews_by_shop_reducer';
// import ReviewsByUserReducer from './reviews_by_user_reducer';

const NewReviewsReducer = combineReducers({
  byProduct : ReviewsByProductReducer,
  byShop : ReviewsByShopReducer
  // byUser : ReviewsByUserReducer
});

export default NewReviewsReducer;