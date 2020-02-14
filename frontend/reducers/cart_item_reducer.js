import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions';

const CartItemsReducer = (state=[], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CART_ITEM:
      return Object.assign([], state, {[action.cartItem.id] : action.cartItem});
      // newState = state.concat(action.cartItem)
      // return newState;
    case RECEIVE_CART_ITEMS:
      // return Object.assign([], state, action.cartItems);

      // newState = state.concat(action.cartItems);
      // return newState;

      newState = Object.assign({}, state);
      for(let i = 0; i < action.cartItems.length; i++){
        let item = action.cartItems[i];
        newState[item.product.id] = item;
      }
      return newState;
    case REMOVE_CART_ITEM:
      // newState = state.concat([]);
      // for(let i = 0; i < newState.length; i++){
      //   let p = newState[i];
      //   if(p.id = action.id){
      //     newState.splice(i, 1);
      //     break;
      //   }
      // }
      // return newState;
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default CartItemsReducer;

