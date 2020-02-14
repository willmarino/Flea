import * as CartApiUtil from '../util/cart_util';

import { receiveShopsByProducts } from '../actions/shop_actions';
import { receiveProductsByShop } from '../actions/product_actions';
import { receiveCartItems } from '../actions/cart_item_actions';

export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId
});

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

// export const deleteCart = (cartId) => dispatch => (
//   CartApiUtil.deleteCart(cartId)
//     .then((cart) => dispatch(removeCart(cart.id)))
// );

export const fetchCartShow = () => dispatch => (
  CartApiUtil.fetchCartShow()
    .then(cso => {
      dispatch(receiveCart(cso.cart_show.cart));
      dispatch(receiveCartItems(cso.cart_show.cart_items));
      dispatch(receiveShopsByProducts(cso.cart_show.shops));
      dispatch(receiveProductsByShop(cso.cart_show.shop_products));
    })
)