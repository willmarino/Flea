import * as ViewUtil from '../util/view_util';

export const RECEIVE_USER_VIEWS = "RECEIVE_USER_VIEWS";
// export const RECEIVE_SHOP_VIEWS = "RECEIVE_SHOP_VIEWS";
export const RECEIVE_PRODUCT_VIEWS = "RECEIVE_PRODUCT_VIEWS";

const receiveUserViews = (views) => ({
  type : RECEIVE_USER_VIEWS,
  views
});

// const receiveShopViews = (views) => ({
//   type : RECEIVE_SHOP_VIEWS,
//   views
// });

const receiveProductViews = (views) => ({
  type : RECEIVE_PRODUCT_VIEWS,
  views
});

// doesnt take id, just uses cur user stored in backend
export const fetchUserViews = () => dispatch => (
  ViewUtil.fetchUserViews()
    .then(views => dispatch(receiveUserViews(views)))
);

// export const fetchShopViews = () => dispatch => (
//   ViewUtil.fetchShopViews()
//     .then(views => dispatch(receiveShopViews(views)))
// );

export const fetchProductViews = (id) => dispatch => (
  ViewUtil.fetchProductViews(id)
    .then(views => dispatch(receiveProductViews(views)))
);

export const addView = (id) => dispatch => (
  ViewUtil.addView(id)
    .then(views => {
      debugger;
      dispatch(receiveProductViews(views))
    })
)