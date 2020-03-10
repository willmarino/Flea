import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP,
  RECEIVE_OWNED_SHOP_IDS,
  RECEIVE_MOST_ORDERED_SHOP_ID,
  RECEIVE_MOST_VIEWED_SHOP_ID
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
    case RECEIVE_MOST_ORDERED_SHOP_ID:
      return Object.assign({}, state, { mostOrdered : action.id });
    case RECEIVE_MOST_VIEWED_SHOP_ID:
      return Object.assign({}, state, { mostViewed : action.id });
    default:
      return state;
  }
}

export default NewestShopReducer;