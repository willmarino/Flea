
export const RECEIVE_PRODUCTS_BY_SHOP = "RECEIVE_PRODUCTS_BY_SHOP";

export const receiveProductsByShop = (products) => ({
  type: RECEIVE_PRODUCTS_BY_SHOP,
  products
})