import * as ProductUtil from '../util/product_util';

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

const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
});


export const fetchProduct = (productId) => dispatch => (
  ProductUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)))
);

export const fetchProducts = () => dispatch => (
  ProductUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
);

export const deleteProduct = (productId) => dispatch => (
  ProductUtil.removeProduct(productId)
    .then((product) => dispatch(removeProduct(product.id)))
);

export const createProduct = (shopId, product) => dispatch => (
  ProductUtil.createProduct(shopId, product)
    .then(product => dispatch(receiveProduct(product)))
);

export const updateProduct = (product) => dispatch => (
  ProductUtil.updateProduct(product)
    .then(product => dispatch(receiveProduct(product)))
);

