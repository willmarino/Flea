import * as CartApiUtil from '../util/cart_util';

import { receiveShopsByProducts } from '../actions/shop_actions';
import {  receiveCartProducts } from '../actions/products/products_in_cart_actions';
import { receiveCartItems } from '../actions/cart_item_actions';

// products by shop
import { receiveProductsByShop } from './products/products_by_shop_actions';

export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CART = "CLEAR_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId
});

const clearCart = () => ({
  type : CLEAR_CART
})

const receiveCartItem = (item) => ({
  type: RECEIVE_CART_ITEM,
  item
})

export const fetchCart = () => dispatch => (
  CartApiUtil.fetchCart()
    .then(cart => dispatch(receiveCart(cart)))
);

export const addItemToCart = (item, cartId) => dispatch => (
  CartApiUtil.addItemToCart(item, cartId)
    .then(cart => dispatch(receiveCart(cart)))
);

export const createCart = (cart) => dispatch => (
  CartApiUtil.createCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const sendClearCart = () => dispatch => (
  CartApiUtil.clearCart()
    .then(() => dispatch(clearCart()))
)

export const fetchCartShow = () => dispatch => (
  CartApiUtil.fetchCartShow()
    .then(cso => {
      dispatch(receiveCartItems(cso.cart_show.cart_items));
      dispatch(receiveCartProducts(cso.cart_show.cart_products));
      dispatch(receiveShopsByProducts(cso.cart_show.shops));
      dispatch(receiveProductsByShop(cso.cart_show.shop_products));
      dispatch(receiveCart(cso.cart_show.cart));
    })
)