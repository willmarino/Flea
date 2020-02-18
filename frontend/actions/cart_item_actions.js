import * as CartItemApiUtil from '../util/cart_items_util';

import {receiveCartProduct, removeCartProduct} from './products/products_in_cart_actions';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  id
});

export const fetchCartItems = () => dispatch => (
  CartItemApiUtil.fetchCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
);

export const createCartItem = (cartItem) => dispatch => (
  CartItemApiUtil.createCartItem(cartItem)
    .then(ci => {
      dispatch(receiveCartItem(ci.cart_item_show.cart_item));
      dispatch(receiveCartProduct(ci.cart_item_show.cart_product));
    })
);

export const deleteCartItem = (cartItemId) => dispatch => (
  CartItemApiUtil.deleteCartItem(cartItemId)
    .then(ci => {
      dispatch(removeCartItem(ci.cart_item_show.cart_item.id));
      dispatch(removeCartProduct(ci.cart_item_show.cart_item.item_id));
    })
);
