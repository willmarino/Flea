import { RECEIVE_PRODUCTS_BY_SHOP } from '../../actions/products/products_by_shop_actions';

const ProductsByShopReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCTS_BY_SHOP:
      return action.products;
    default:
      return state;
  }
}

export default ProductsByShopReducer;