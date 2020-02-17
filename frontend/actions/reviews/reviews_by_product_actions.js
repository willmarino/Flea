
export const RECEIVE_PRODUCT_REVIEWS = "RECEIVE_PRODUCT_REVIEWS";

export const receiveProductReviews = (reviews) => ({
  type: RECEIVE_PRODUCT_REVIEWS,
  reviews
})