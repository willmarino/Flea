import {
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEMS,
  REMOVE_CART_ITEM
} from '../actions/newest_cartitem_actions';

const NewestCartItemsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CART_ITEMS:
      newState = {};
      for(let i = 0; i < action.cartItems.length; i++){
        let c = action.cartItems[i];
        newState[c.id] = c;
      }
      return newState;
    case RECEIVE_CART_ITEM:
      return Object.assign({}, state, { [action.cartItem.id] : action.cartItem});
    case REMOVE_CART_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.cartItemId];
      return newState;
    default:
      return state;
  }
}

export default NewestCartItemsReducer;