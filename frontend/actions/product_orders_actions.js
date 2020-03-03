

export const RECEIVE_PRODUCT_ORDERS = "RECEIVE_PRODUCT_ORDERS";
export const RECEIVE_SHOP_PRODUCT_ORDER_IDS = "RECEIVE_SHOP_PRODUCT_ORDER_IDS";

export const receiveProductOrders = (productOrders) => ({
  type: RECEIVE_PRODUCT_ORDERS,
  productOrders
});

export const receiveShopProductOrderIds = (ids) => ({
  type: RECEIVE_SHOP_PRODUCT_ORDER_IDS,
  ids
});

