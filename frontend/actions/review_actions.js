import * as ReviewApiUtil from '../util/review_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

// export const RECEIVE_HAPPY_REVIEWS = "RECEIVE_HAPPY_REVIEWS";
// export const HAPPY_PRODUCTS = "HAPPY_PRODUCTS";
// export const HAPPY_USERS = "HAPPY_USERS";

// export const RECEIVE_PRODUCT_REVIEWS = "RECEIVE_PRODUCT_REVIEWS";
// export const RECEIVE_SHOP_REVIEWS = "RECEIVE_SHOP_REVIEWS";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

// const recieveHappyReviews = reviews => ({
//   type: RECEIVE_HAPPY_REVIEWS,
//   reviews
// })

// export const receiveProductReviews = (reviews) => ({
//   type: RECEIVE_PRODUCT_REVIEWS,
//   reviews
// })

// export const receiveShopReviews = (reviews) => ({
//   type: RECEIVE_SHOP_REVIEWS,
//   reviews
// })

// const happyReviewProducts = products => ({
//   type: HAPPY_PRODUCTS,
//   products
// })

// const happyReviewUsers = users => ({
//   type: HAPPY_USERS,
//   users
// })

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
    .then(reviews => dispatch(receiveProductReviews(reviews)))
);

export const fetchReviewsByShop = (id) => dispatch => (
  ReviewApiUtil.fetchReviewsByShop(id)
    .then(reviews => dispatch(receiveShopReviews(reviews)))
)

// export const fetchHappyReviews = () => dispatch => (
//   ReviewApiUtil.fetchHappyReviews()
//     .then((hrs) => {
//       dispatch(recieveHappyReviews(hrs.happy_reviews.reviews));
//       dispatch(happyReviewProducts(hrs.happy_reviews.products));
//       dispatch(happyReviewUsers(hrs.happy_reviews.users));
//     })
// );