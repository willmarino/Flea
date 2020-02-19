import { RECEIVE_SHOP, REMOVE_SHOP } from '../../actions/shop_actions';
import { RECEIVE_OWNED_SHOPS } from '../../actions/shop/main_shop_actions';

const MainShopsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    // Only should be used for main/shop show
    case RECEIVE_SHOP:
      // return Object.assign({}, state, { main : action.shop });
      return action.shop;
    // case REMOVE_SHOP:
    //   let newState = Object.assign({}, state);
    //   delete newState[action.shopId];
    //   return newState;
    case RECEIVE_OWNED_SHOPS:
      for(let i = 0; i < action.shops.length; i++){
        let s = action.shops[i];
        newState[s.id] = s;
      }
      return Object.assign({}, state, { ownedShops : newState });
    default:
      return state;
  }
}

export default MainShopsReducer;