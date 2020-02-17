import {
  RECEIVE_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  RECEIVE_CART_PRODUCTS
} from '../../actions/products/products_in_cart_actions';

const ProductsInCartReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CART_PRODUCTS:
      newState = {};
      for(let i = 0; i < action.products.length; i++){
        newState[action.products[i].id] = action.products[i];
      }
      return newState;
    case RECEIVE_CART_PRODUCT:
      return Object.assign({}, state, {[action.product.id] : action.product});
    case REMOVE_CART_PRODUCT:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default ProductsInCartReducer;