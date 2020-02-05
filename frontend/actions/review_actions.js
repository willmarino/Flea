import * as ReviewApiUtil from '../util/review_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const RECEIVE_HAPPY_REVIEWS = "RECEIVE_HAPPY_REVIEWS";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const recieveHappyReviews = reviews => ({
  type: RECEIVE_HAPPY_REVIEWS,
  reviews
})

export const createReview = (review) => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const fetchReviews = () => dispatch => (
  ReviewApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReviewsByProduct = (id) => dispatch => (
  ReviewApiUtil.fetchReviewsByProduct(id)
    .then(reviews => dispatch(receiveReviews(reviews)))
);