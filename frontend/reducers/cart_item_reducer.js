import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS } from '../actions/cart_item_actions';

const CartItemsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CART_ITEM:
      return Object.assign({}, state, {[action.cartItem.id] : action.cartItem});
    case RECEIVE_CART_ITEMS:
      return Object.assign({}, state, action.cartItems);
    default:
      return state;
  }
};

export default CartItemsReducer;

