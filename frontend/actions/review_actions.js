import * as ReviewApiUtil from '../util/review_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWs";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const createReview = (review) => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const fetchReviews = () => dispatch => (
  ReviewApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
);