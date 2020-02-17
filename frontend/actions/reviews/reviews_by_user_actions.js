

export const RECEIVE_PRODUCT_REVIEW_AUTHORS = "RECEIVE_PRODUCT_REVIEW_AUTHORS";
export const RECEIVE_SHOP_REVIEW_AUTHORS = "RECEIVE_SHOP_REVIEW_AUTHORS";

export const receiveProductReviewAuthors = (users) => ({
  type: RECEIVE_PRODUCT_REVIEW_AUTHORS,
  users
})

export const receiveShopReviewAuthors = (users) => ({
  type: RECEIVE_SHOP_REVIEW_AUTHORS,
  users
})