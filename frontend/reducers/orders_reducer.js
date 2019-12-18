import {RECEIVE_ORDER, RECEIVE_ORDERS} from '../actions/order_actions';

const OrdersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ORDER:
      return Object.assign({}, state, { [action.order.id] : action.order});
    case RECEIVE_ORDERS:
      return Object.assign({}, state, action.orders);
    default:
      return state;
  }
};

export default OrdersReducer;