import * as CartApiUtil from '../util/cart_util';

export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId
});

export const fetchCart = (cartId) => dispatch => (
  CartApiUtil.fetchCart(cartId)
    .then(cart => dispatch(receiveCart(cart)))
);

export const createCart = (cart) => dispatch => (
  CartApiUtil.createCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const deleteCart = (cartId) => dispatch => (
  CartApiUtil.deleteCart(cart)
    .then((cart) => dispatch(removeCart(cart.id)))
);

