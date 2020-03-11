import * as ProductFavoriteUtil from '../util/product_favorite_util';

export const RECEIVE_PRODUCT_FAVORITES = "RECEIVE_PRODUCT_FAVORITES";
export const RECEIVE_PRODUCT_FAVORITE = "RECEIVE_PRODUCT_FAVORITE";
export const REMOVE_PRODUCT_FAVORITE = "REMOVE_PRODUCT_FAVORITE";

export const receiveProductFavorites = (product_favorites) => ({
  type: RECEIVE_PRODUCT_FAVORITES,
  product_favorites
});

const receiveProductFavorite = (product_favorite) => ({
  type: RECEIVE_PRODUCT_FAVORITE,
  product_favorite
});

const removeProductFavorite = (id) => ({
  type: REMOVE_PRODUCT_FAVORITE,
  id
});

export const fetchProductFavorites = (id) => (dispatch) => (
  ProductFavoriteUtil.fetchProductFavorites(id)
    .then(res => {
      debugger;
      dispatch(receiveProductFavorites(res.product_favorites));
    })
);

export const createProductFavorite = (id) => (dispatch) => (
  ProductFavoriteUtil.createProductFavorite(id)
    .then(res => {
      debugger;
      dispatch(receiveProductFavorite(res.product_favorite));
    })
);

export const deleteProductFavorite = (id) => (dispatch) => (
  ProductFavoriteUtil.deleteProductFavorite(id)
    .then(res => {
      debugger;
      dispatch(removeProductFavorite(res.product_favorite_id));
    })
);