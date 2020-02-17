import * as ReviewApiUtil from '../util/review_util';

export const RECEIVE_HAPPY_REVIEWS = "RECEIVE_HAPPY_REVIEWS";
export const HAPPY_PRODUCTS = "HAPPY_PRODUCTS";
export const HAPPY_USERS = "HAPPY_USERS";

const recieveHappyReviews = reviews => ({
  type: RECEIVE_HAPPY_REVIEWS,
  reviews
});

const happyReviewProducts = products => ({
  type: HAPPY_PRODUCTS,
  products
});

const happyReviewUsers = users => ({
  type: HAPPY_USERS,
  users
});

export const fetchHappyReviews = () => dispatch => (
  ReviewApiUtil.fetchHappyReviews()
    .then((hrs) => {
      dispatch(recieveHappyReviews(hrs.happy_reviews.reviews));
      dispatch(happyReviewProducts(hrs.happy_reviews.products));
      dispatch(happyReviewUsers(hrs.happy_reviews.users));
    })
);