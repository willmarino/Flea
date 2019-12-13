import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT
} from '../actions/product_actions';

const ProductsReducer = (state={}, action) => {
  // debugger;
  Object.freeze(state);
  switch(action.type){
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