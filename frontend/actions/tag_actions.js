
// 1
export const RECEIVE_TAGS_FOR_SHOP_REVIEWS = "RECEIVE_TAGS_FOR_SHOP_REVIEWS";
// 2
export const RECEIVE_SUGGESTED_SEARCH_TAGS = "RECEIVE_SUGGESTED_SEARCH_TAGS";

// 1
export const receiveTagsForShopReviews = (tags) => ({
  type: RECEIVE_TAGS_FOR_SHOP_REVIEWS,
  tags
});

export const receiveSuggestedSearchTags = (tags) => ({
  type: RECEIVE_SUGGESTED_SEARCH_TAGS,
  tags
});

