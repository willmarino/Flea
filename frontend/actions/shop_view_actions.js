import * as ShopViewUtil from '../util/shop_view_util';

export const RECEIVE_SHOP_VIEWS = "RECEIVE_SHOP_VIEWS";

const receiveShopViews = (views) => ({
  type : RECEIVE_SHOP_VIEWS,
  views
});

export const fetchShopViews = (id) => dispatch => (
  ShopViewUtil.fetchShopViews(id)
    .then(views => dispatch(receiveShopViews(views)))
)

export const addShopView = (id) => dispatch => (
  ShopViewUtil.addShopView(id)
    .then(views => dispatch(receiveShopViews(views)))
)