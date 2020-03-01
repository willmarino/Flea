import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP,
  RECEIVE_OWNED_SHOP_IDS
} from '../actions/newest_shop_actions';

const NewestShopReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_SHOPS:
      for(let i = 0; i < action.shops.length; i++){
        let s = action.shops[i];
        newState[s.id] = s;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SHOP:
      return Object.assign({}, state, { [action.shop.id]: action.shop });
    case RECEIVE_OWNED_SHOP_IDS:
      return Object.assign({}, state, { ownedShopIds : action.ids });
    default:
      return state;
  }
}

export default NewestShopReducer;