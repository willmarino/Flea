import * as ShopFavoriteUtil from '../util/shop_favorites_util';

export const RECEIVE_SHOP_FAVORITES = "RECEIVE_SHOP_FAVORITES";
export const RECEIVE_SHOP_FAVORITE = "RECEIVE_SHOP_FAVORITE";
export const REMOVE_SHOP_FAVORITE = "REMOVE_SHOP_FAVORITE";
export const RECEIVE_SF_IDS_PROFILE = "RECEIVE_SF_IDS_PROFILE";

export const receiveShopFavorites = (shop_favorites) => ({
  type: RECEIVE_SHOP_FAVORITES,
  shop_favorites
});

export const receiveShopFavorite = (shop_favorite) => ({
  type: RECEIVE_SHOP_FAVORITE,
  shop_favorite
});

export const removeShopFavorite = (id) => ({
  type: REMOVE_SHOP_FAVORITE,
  id
});

export const receiveSFIdsProfile = (ids) => ({
  type: RECEIVE_SF_IDS_PROFILE,
  ids
})

export const fetchShopFavorites = (id) => (dispatch) => (
  ShopFavoriteUtil.fetchShopFavorites(id)
    .then(res => {
      dispatch(receiveShopFavorites(res.shop_favorites));
    })
);

export const createShopFavorite = (id) => (dispatch) => (
  ShopFavoriteUtil.createShopFavorite(id)
    .then(res => {
      dispatch(receiveShopFavorite(res.shop_favorite));
    })
);

export const deleteShopFavorite = (id) => (dispatch) => (
  ShopFavoriteUtil.deleteShopFavorite(id)
    .then(res => {
      dispatch(removeShopFavorite(res.shop_favorite_id));
    })
);