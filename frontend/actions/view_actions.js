import * as ViewUtil from '../util/view_util';

// export const RECEIVE_USER_VIEWS = "RECEIVE_USER_VIEWS";
// export const RECEIVE_PRODUCT_VIEWS = "RECEIVE_PRODUCT_VIEWS";
// export const RECEIVE_RECENT_VIEWS = "RECEIVE_RECENT_VIEWS";
// export const RECEIVE_RECENTLY_VIEWED_PRODUCTS = "RECEIVE_RECENTLY_VIEWED_PRODUCTS";
// export const RECEIVE_CATS_FOR_RECENTLY_VIEWED = "RECEIVE_CATS_FOR_RECENTLY_VIEWED";

import { receiveProduct, receiveRecentlyViewedId } from '../actions/newest_product_actions';

export const RECEIVE_VIEWS = "RECEIVE_VIEWS";
export const RECEIVE_SHOP_PRODUCT_VIEW_IDS = "RECEIVE_SHOP_PRODUCT_VIEW_IDS";

// const receiveUserViews = (views) => ({
//   type : RECEIVE_USER_VIEWS,
//   views
// });

// const receiveProductViews = (views) => ({
//   type : RECEIVE_PRODUCT_VIEWS,
//   views
// });




// const receiveRecentViews = (views) => ({
//   type : RECEIVE_RECENT_VIEWS,
//   views
// });

export const receiveViews = (views) => ({
  type: RECEIVE_VIEWS,
  views
});

export const receiveShopProductViewIds = (ids) => ({
  type: RECEIVE_SHOP_PRODUCT_VIEW_IDS,
  ids
});

// const receiveRecentlyViewedProducts = (products) => ({
//   type : RECEIVE_RECENTLY_VIEWED_PRODUCTS,
//   products
// });

// const receiveCatsForRecentlyViewed = (categories) => ({
//   type : RECEIVE_CATS_FOR_RECENTLY_VIEWED,
//   categories
// });



// doesnt take id, just uses cur user stored in backend
export const fetchUserViews = () => dispatch => (
  ViewUtil.fetchUserViews()
    .then(views => dispatch(receiveUserViews(views)))
);

export const fetchRecentViews = () => dispatch => (
  ViewUtil.fetchRecentViews()
    .then(res => {
      dispatch(receiveRecentViews(res.views));
      dispatch(receiveRecentlyViewedProducts(res.products));
    })
);

// export const fetchProductViews = (id) => dispatch => (
//   ViewUtil.fetchProductViews(id)
//     .then(views => dispatch(receiveViews(views)))
// );

export const addView = (id) => dispatch => (
  ViewUtil.addView(id)
    .then(res => {
      dispatch(receiveViews(res.view));
      dispatch(receiveProduct(res.product));
      dispatch(receiveRecentlyViewedId(res.product.id));
    })
);