import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
  RECEIVE_CATEGORY
} from '../actions/product_actions';

import { RECENTLY_VIEWED_PRODUCTS } from '../actions/users_actions';

import { RECEIVE_HAPPY_REVIEWS } from '../actions/review_actions';

const ProductsReducer = (state={}, action) => {
  // debugger;
  Object.freeze(state);
  debugger;
  switch(action.type){
    case RECEIVE_HAPPY_REVIEWS:
      return Object.assign({}, state, action.reviews[products])
    case RECENTLY_VIEWED_PRODUCTS:
      return Object.assign({}, state, action.products);
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {[Object.values(action.products)[0].high_level_category]: action.products});
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    case REMOVE_PRODUCT:
      let newState = Object.assign({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default ProductsReducer;