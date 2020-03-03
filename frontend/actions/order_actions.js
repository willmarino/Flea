import * as OrderApiUtil from '../util/order_util';

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_SHOP_ORDERS_IDS = "RECEIVE_SHOP_ORDERS_IDS";

// for createOrder
import { sendClearCart } from './newest_cartitem_actions';

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order
});

export const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders
});

export const receiveShopOrdersIds = (ids) => ({
  type: RECEIVE_SHOP_ORDERS_IDS,
  ids
})

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

