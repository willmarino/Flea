export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

const removeProduct = () => ({
  type: REMOVE_PRODUCT
});


export const fetchProduct = (productId)