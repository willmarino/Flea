import {RECEIVE_ORDER, RECEIVE_ORDERS} from '../actions/order_actions';

const OrdersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ORDER:
      return Object.assign({}, state, { [action.type.id] : action.type});
    case RECEIVE_ORDERS:
      return Object.assign({}, state, action.type);
    default:
      return state;
  }
};

export default OrdersReducer;