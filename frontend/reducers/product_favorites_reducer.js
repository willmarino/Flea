import {
  RECEIVE_PRODUCT_FAVORITES,
  RECEIVE_PRODUCT_FAVORITE,
  REMOVE_PRODUCT_FAVORITE,
  RECEIVE_PF_IDS_PROFILE
} from '../actions/product_favorite_actions';

const ProductFavoritesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_PRODUCT_FAVORITE:
      return Object.assign({}, state, { [action.product_favorite.id] : action.product_favorite });
    case RECEIVE_PRODUCT_FAVORITES:
      for(let i = 0; i < action.product_favorites.length; i++){
        let pf = action.product_favorites[i];
        newState[pf.id] = pf;
      }
      return Object.assign({}, state, newState);
    case REMOVE_PRODUCT_FAVORITE:
      newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    case RECEIVE_PF_IDS_PROFILE:
      return Object.assign({}, state, { forProfile : action.ids });
    default:
      return state;
  }
}

export default ProductFavoritesReducer;