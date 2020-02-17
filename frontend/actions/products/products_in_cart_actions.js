
export const RECEIVE_CART_PRODUCTS = "RECEIVE_CART_PRODUCTS";
export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";
export const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT";


export const removeCartProduct = (id) => ({
  type: REMOVE_CART_PRODUCT,
  id
})

export const receiveCartProduct = (product) => ({
  type: RECEIVE_CART_PRODUCT,
  product
})

export const receiveCartProducts = (products) => ({
  type: RECEIVE_CART_PRODUCTS,
  products
})