import * as ReviewUtil from '../util/review_util';

// imported for happy reviews functions
import { receiveProducts } from './newest_product_actions';
import { receiveHappyProductIds } from './newest_product_actions';
import { receiveUsers } from './users_actions';
import { receiveHappyUserIds } from './users_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_HAPPY_REVIEW_IDS = "RECEIVE_HAPPY_REVIEW_IDS";
export const RECEIVE_PRODUCT_REVIEW_IDS = "RECEIVE_PRODUCT_REVIEW_IDS";
export const RECEIVE_SHOP_REVIEW_IDS = "RECEIVE_SHOP_REVIEW_IDS";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveHappyReviewIds = (ids) => ({
  type: RECEIVE_HAPPY_REVIEW_IDS,
  ids
});

export const receiveProductReviewIds = (ids) => ({
  type: RECEIVE_PRODUCT_REVIEW_IDS,
  ids
});

export const receiveShopReviewIds = (ids) => ({
  type: RECEIVE_SHOP_REVIEW_IDS,
  ids
});


export const fetchHappyReviews = () => dispatch => (
  ReviewUtil.fetchHappyReviews()
    .then(res => {
      dispatch(receiveReviews(res.reviews));
      dispatch(receiveHappyReviewIds(res.reviewIds));
      dispatch(receiveProducts(res.products));
      dispatch(receiveHappyProductIds(res.productIds));
      dispatch(receiveUsers(res.users));
      dispatch(receiveHappyUserIds(res.userIds));
    })
)