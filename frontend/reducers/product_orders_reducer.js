import {
  RECEIVE_PRODUCT_ORDERS,
  RECEIVE_SHOP_PRODUCT_ORDER_IDS
} from '../actions/product_orders_actions';

const ProductOrdersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_PRODUCT_ORDERS:
      action.productOrders.forEach((el) => {
        newState[el.id] = el;
      })
      return Object.assign({}, state, newState);
    case RECEIVE_SHOP_PRODUCT_ORDER_IDS:
      return Object.assign({}, state, { shopProductOrderIds : action.ids })
    default:
      return state;
  }
}

export default ProductOrdersReducer;