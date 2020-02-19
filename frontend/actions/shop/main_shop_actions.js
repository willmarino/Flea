import * as ShopUtil from '../../util/shop_util';

export const RECEIVE_OWNED_SHOPS = "RECEIVE_OWNED_SHOPS";

export const receiveOwnedShops = (shops) => ({
  type : RECEIVE_OWNED_SHOPS,
  shops
})

export const fetchOwnedShops = () => (dispatch) => (
  ShopUtil.fetchOwnedShops()
    .then(shops => dispatch(receiveOwnedShops(shops)))
)