import {RECEIVE_CART, REMOVE_CART} from '../actions/cart_actions';

const CartsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CART:
      return Object.assign({}, state, { [action.type.id] : action.type});
    case REMOVE_CART:
      let newState = Object.assign({}, state);
      delete newState[action.cartId];
      return newState;
    default:
      return state;
  }
};

export default CartsReducer;