import { RECEIVE_SHOP_MANAGER_CHANGE } from '../actions/shop_manager_actions';

const ShopManagerReducer = (state='Dashboard', action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHOP_MANAGER_CHANGE:
      return action.change;
    default:
      return state;
  }
}

export default ShopManagerReducer;