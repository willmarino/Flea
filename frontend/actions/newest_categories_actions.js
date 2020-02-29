
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});