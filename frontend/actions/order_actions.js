import * as OrderApiUtil from '../util/order_util';

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order
});

const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders
});

export const fetchOrder = (orderId) => dispatch => (
  OrderApiUtil.fetchOrder(orderId)
    .then(order => dispatch(receiveOrder(order)))
);

export const fetchOrders = () => dispatch => (
  OrderApiUtil.fetchOrders()
    .then(orders => dispatch(receiveOrders(orders)))
);

export const createOrder = (order) => dispatch => {
  return(
    OrderApiUtil.createOrder(order)
      .then(order => {
        dispatch(receiveOrder(order.order))
      })
      .then(() => {
        dispatch(sendClearCart())
      })
  )
};

