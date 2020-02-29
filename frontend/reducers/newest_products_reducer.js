import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCT,
  RECEIVE_INDEX_IDS,
  RECEIVE_RECENTLY_VIEWED_IDS,
  RECEIVE_HAPPY_PRODUCT_IDS,
  RECEIVE_SHOP_PRODUCT_IDS,
  RECEIVE_ASSOCIATED_IDS,
  RECEIVE_SEARCH_PRODUCT_IDS
} from "../actions/newest_product_actions";

const NewestProductsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id] : action.product });
    case RECEIVE_PRODUCTS:
      for(let i = 0; i < action.products.length; i++){
        let p = action.products[i];
        newState[p.id] = p;
      }
      return Object.assign({}, state, newState);
    case REMOVE_PRODUCT:
      newState = Object.assign(state, {});
      delete newState[action.productId];
      return newState;
    case RECEIVE_INDEX_IDS:
      return Object.assign({}, state, { indexIds : action.ids });
    case RECEIVE_RECENTLY_VIEWED_IDS:
      return Object.assign({}, state, { recentlyViewedIds : action.ids });
    case RECEIVE_HAPPY_PRODUCT_IDS:
      return Object.assign({}, state, { happyProductIds : action.ids });
    case RECEIVE_SHOP_PRODUCT_IDS:
      return Object.assign({}, state, { shopProductIds : action.ids });
    case RECEIVE_ASSOCIATED_IDS:
      return Object.assign({}, state, { associatedIds : action.ids });
    case RECEIVE_SEARCH_PRODUCT_IDS:
      return Object.assign({}, state, { searchIds : action.ids });
    default:
      return state;
  }
}
export default NewestProductsReducer;