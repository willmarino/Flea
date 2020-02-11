import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
  RECEIVE_INDEX,
  RECEIVE_SHOP_REVIEW_PRODUCTS,
  RECEIVE_PRODUCTS_BY_SHOP
} from '../actions/product_actions';

import { HAPPY_PRODUCTS } from '../actions/review_actions';

import { RECENTLY_VIEWED_PRODUCTS } from '../actions/users_actions';

const ProductsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCTS_BY_SHOP:
      return Object.assign({}, state, { shopProducts : action.products })
    case RECEIVE_SHOP_REVIEW_PRODUCTS:
      return Object.assign({}, state, { shopReviewProducts : action.products })
    case HAPPY_PRODUCTS:
      return Object.assign({}, state, {happyProducts : action.products})
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {categories: action.products})
    case RECENTLY_VIEWED_PRODUCTS:
      return Object.assign({}, state, action.products);
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, action.products)
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    case RECEIVE_INDEX:
      return Object.assign({}, state, {index : action.products});
    case REMOVE_PRODUCT:
      let newState = Object.assign({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default ProductsReducer;