import * as ShopViewUtil from '../util/shop_view_util';

export const RECEIVE_SHOP_VIEWS = "RECEIVE_SHOP_VIEWS";
export const RECEIVE_SHOP_VIEWS_IDS = "RECEIVE_SHOP_VIEWS_IDS";

export const receiveShopViews = (shopViews) => ({
  type : RECEIVE_SHOP_VIEWS,
  shopViews
});

export const receiveShopViewsIds = (ids) => ({
  type: RECEIVE_SHOP_VIEWS_IDS,
  ids
})

export const fetchShopViews = (id) => dispatch => (
  ShopViewUtil.fetchShopViews(id)
    .then(views => dispatch(receiveShopViews(views)))
)

export const addShopView = (id) => dispatch => (
  ShopViewUtil.addShopView(id)
    .then(views => dispatch(receiveShopViews(views)))
)