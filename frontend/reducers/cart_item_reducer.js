import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions';
import { CLEAR_CART } from '../actions/cart_actions';

const CartItemsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_CART_ITEM:
      return Object.assign({}, state, {[action.cartItem.id] : action.cartItem});
    case RECEIVE_CART_ITEMS:
      newState = {};
      for(let i = 0; i < action.cartItems.length; i++){
        let item = action.cartItems[i];
        newState[item.id] = item;
      }
      return newState;
    case REMOVE_CART_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default CartItemsReducer;

