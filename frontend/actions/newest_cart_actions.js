import * as CartUtil from '../util/cart_util';

// fetchCartShow
import { receivePageLoaded } from '../actions/newest_page_loaded_actions';
import { receiveProducts, receiveShopProductIds } from '../actions/newest_product_actions';
import { receiveShops } from '../actions/newest_shop_actions';
import { receiveCartItems } from '../actions/newest_cartitem_actions';


export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const removeCart = () => ({
  type: REMOVE_CART
});

export const fetchCartShow = () => dispatch => (
  CartUtil.fetchCartShow()
    .then(res => {
      dispatch(receiveCartItems(res.cart_items));
      dispatch(receiveProducts(res.products));
      dispatch(receiveShopProductIds(res.shop_product_ids));
      dispatch(receiveShops(res.shops));
      dispatch(receiveCart(res.cart));
      dispatch(receivePageLoaded('cartshow'));
    })
)