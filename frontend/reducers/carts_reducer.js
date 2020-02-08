import {RECEIVE_CART, REMOVE_CART, RECEIVE_CART_ITEM} from '../actions/cart_actions';

const CartsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CART:
      return {'currentCart' : action.cart};
    case REMOVE_CART:
      newState = Object.assign({}, state);
      delete newState[action.cartId];
      return newState;
    default:
      return state;
  }
};

export default CartsReducer;