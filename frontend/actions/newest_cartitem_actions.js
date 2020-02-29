import * as CartItemUtil from '../util/cart_items_util';

// createCartItem
import { receiveProduct } from '../actions/newest_product_actions';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId
})

export const fetchCartItems = () => dispatch => (
  CartItemUtil.fetchCartItems()
    .then(res => {
      dispatch(receiveCartItems(res.cartItems))
    })
)

export const createCartItem = (cartItem) => dispatch => (
  CartItemUtil.createCartItem(cartItem)
    .then(res => {
      dispatch(receiveCartItem(res.cart_item));
      dispatch(receiveProduct(res.cart_product));
    })
)

export const deleteCartItem = (cartItemId) => dispatch => (
  CartItemUtil.deleteCartItem(cartItemId)
    .then(res => {
      dispatch(removeCartItem(res.cartItemId));
    })
)