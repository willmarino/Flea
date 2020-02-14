import * as CartItemApiUtil from '../util/cart_items_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

export const fetchCartItems = () => dispatch => (
  CartItemApiUtil.fetchCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
);

export const createCartItem = (cartItem) => dispatch => (
  CartItemApiUtil.createCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = (cartItemId) => dispatch => (
  CartItemApiUtil.deleteCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);
