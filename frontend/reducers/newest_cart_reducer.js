import {
  RECEIVE_CART,
  REMOVE_CART
} from '../actions/newest_cart_actions';

const NewestCartReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CART:
      return action.cart.id;
    case REMOVE_CART:
      return {};
    default:
      return state;
  }
}

export default NewestCartReducer;