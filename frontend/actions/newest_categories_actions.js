import * as CategoryUtil from '../util/category_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_SEARCH_CATEGORY_IDS = "RECEIVE_SEARCH_CATEGORY_IDS";

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveSearchCategoryIds = (ids) => ({
  type: RECEIVE_SEARCH_CATEGORY_IDS,
  ids
});

export const fetchAllCategories = () => (dispatch) => (
  CategoryUtil.fetchAllCategories()
    .then(res => {
      debugger;
      dispatch(receiveCategories(res));
    })
)