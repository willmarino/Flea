import * as ViewUtil from '../util/view_util';

export const RECEIVE_USER_VIEWS = "RECEIVE_USER_VIEWS";
export const RECEIVE_PRODUCT_VIEWS = "RECEIVE_PRODUCT_VIEWS";
export const RECEIVE_RECENT_VIEWS = "RECEIVE_RECENT_VIEWS";
export const RECEIVE_RECENTLY_VIEWED_PRODUCTS = "RECEIVE_RECENTLY_VIEWED_PRODUCTS";
export const RECEIVE_CATS_FOR_RECENTLY_VIEWED = "RECEIVE_CATS_FOR_RECENTLY_VIEWED"; 

const receiveUserViews = (views) => ({
  type : RECEIVE_USER_VIEWS,
  views
});

const receiveProductViews = (views) => ({
  type : RECEIVE_PRODUCT_VIEWS,
  views
});




const receiveRecentViews = (views) => ({
  type : RECEIVE_RECENT_VIEWS,
  views
});

const receiveRecentlyViewedProducts = (products) => ({
  type : RECEIVE_RECENTLY_VIEWED_PRODUCTS,
  products
});

const receiveCatsForRecentlyViewed = (categories) => ({
  type : RECEIVE_CATS_FOR_RECENTLY_VIEWED,
  categories
});



// doesnt take id, just uses cur user stored in backend
export const fetchUserViews = () => dispatch => (
  ViewUtil.fetchUserViews()
    .then(views => dispatch(receiveUserViews(views)))
);

export const fetchRecentViews = () => dispatch => (
  ViewUtil.fetchRecentViews()
    .then(res => {
      debugger;
      dispatch(receiveRecentViews(res.views));
      dispatch(receiveRecentlyViewedProducts(res.products));
      // dispatch(receiveCatsForRecentlyViewed(res.categories));
    })
);

export const fetchProductViews = (id) => dispatch => (
  ViewUtil.fetchProductViews(id)
    .then(views => dispatch(receiveProductViews(views)))
);

export const addView = (id) => dispatch => (
  ViewUtil.addView(id)
    .then(views => {
      dispatch(receiveProductViews(views))
    })
);