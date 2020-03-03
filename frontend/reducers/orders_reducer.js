import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS,
  RECEIVE_SHOP_ORDERS_IDS
} from '../actions/order_actions';

const OrdersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_ORDER:
      return Object.assign({}, state, { [action.order.id] : action.order});
    case RECEIVE_ORDERS:
      for(let i = 0; i < action.orders.length; i++){
        let cur_order = action.orders[i];
        newState[cur_order.id] = cur_order;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SHOP_ORDERS_IDS:
      return Object.assign({}, state, { shopOrderIds : action.ids})
    default:
      return state;
  }
};

export default OrdersReducer;