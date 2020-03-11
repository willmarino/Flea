import {
  RECEIVE_SHOP_FAVORITES,
  RECEIVE_SHOP_FAVORITE,
  REMOVE_SHOP_FAVORITE
} from '../actions/shop_favorite_actions';

const ShopFavoritesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_SHOP_FAVORITE:
      return Object.assign({}, state, { [action.shop_favorite.id] : action.shop_favorite })
    case RECEIVE_SHOP_FAVORITES:
      for(let i = 0; i < action.shop_favorites.length; i++){
        let sf = action.shop_favorites[i];
        newState[sf.id] = sf;
      }
      return Object.assign({}, state, newState);
    case REMOVE_SHOP_FAVORITE:
      newState = Object.assign({}, state);
      delete newState[action.shop_favorite.id];
      return newState;
    default:
      return state;
  }
}

export default ShopFavoritesReducer;