import {
  RECEIVE_SHOP_BY_PRODUCT,
  RECEIVE_SHOPS_BY_PRODUCTS,
  RECEIVE_SHOPS_BY_ASSOCIATED_PRODUCTS,
  RECEIVE_PRODUCT_SHOW_SHOP
} from '../../actions/shop_actions';

const ShopsByProductsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHOPS_BY_PRODUCTS:
      let newState = {};
      for(let i = 0; i < action.shops.length; i++){
        let s = action.shops[i];
        newState[s.id] = s;
      }
      return newState;
    case RECEIVE_SHOP_BY_PRODUCT:
      return Object.assign({}, state, { byProduct : action.shop });
      case RECEIVE_SHOPS_BY_ASSOCIATED_PRODUCTS:
        return Object.assign({}, state, { shopsByAssociatedProducts  : action.shops })
      case RECEIVE_PRODUCT_SHOW_SHOP:
        return Object.assign({}, state, { productShow : action.shop })
    default:
      return state;
  }
}

export default ShopsByProductsReducer;