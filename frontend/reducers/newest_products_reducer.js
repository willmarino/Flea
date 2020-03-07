import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCT,
  RECEIVE_INDEX_IDS,
  RECEIVE_CATEGORY_ROW_IDS,
  RECEIVE_RECENTLY_VIEWED_ID,
  RECEIVE_RECENTLY_VIEWED_IDS,
  RECEIVE_HAPPY_PRODUCT_IDS,
  RECEIVE_SHOP_PRODUCT_IDS,
  RECEIVE_SHOP_PRODUCT_ID,
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
    case RECEIVE_CATEGORY_ROW_IDS:
      return Object.assign({}, state, { catRowIds : action.ids });
    case RECEIVE_RECENTLY_VIEWED_IDS:
      return Object.assign({}, state, { recentlyViewedIds : action.ids });
    case RECEIVE_RECENTLY_VIEWED_ID:
      let newStateTwo;
      if(state.recentlyViewedIds){
        newStateTwo = Object.assign({}, state);
        newStateTwo.recentlyViewedIds.forEach((id, i) => {
          if(action.id === id){
            newStateTwo.recentlyViewedIds.splice(i, 1);
          }
        })
        newStateTwo.recentlyViewedIds.unshift(action.id);
        return newStateTwo;
      }else{
        newStateTwo = [action.id];
        return Object.assign({}, state, { recentlyViewedIds : newStateTwo });
      }
    case RECEIVE_HAPPY_PRODUCT_IDS:
      return Object.assign({}, state, { happyProductIds : action.ids });
    case RECEIVE_SHOP_PRODUCT_IDS:
      return Object.assign({}, state, { shopProductIds : action.ids });
    case RECEIVE_SHOP_PRODUCT_ID:
      if(state.shopProductIds){
        newState = state.shopProductIds;
        newState.push(action.id);
      }else{
        newState = [action.id];
      }
      return Object.assign({}, state, newState);
    case RECEIVE_ASSOCIATED_IDS:
      return Object.assign({}, state, { associatedIds : action.ids });
    case RECEIVE_SEARCH_PRODUCT_IDS:
      return Object.assign({}, state, { searchIds : action.ids });
    default:
      return state;
  }
}
export default NewestProductsReducer;