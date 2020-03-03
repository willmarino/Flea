import {
  RECEIVE_SHOP_VIEWS,
  RECEIVE_SHOP_VIEWS_IDS
} from '../actions/shop_view_actions';

const ShopViewReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_SHOP_VIEWS:
      for(let i = 0; i < action.shopViews.length; i++){
        let curShopView = action.shopViews[i];
        newState[curShopView.id] = curShopView;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SHOP_VIEWS_IDS:
      return Object.assign({}, state, { ShopViewIds : action.ids })
    default:
      return state;
  }
}

export default ShopViewReducer;