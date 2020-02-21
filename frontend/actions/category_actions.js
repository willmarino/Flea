import * as CategoryUtil from '../util/category_util';

export const RECEIVE_NEW_CATEGORIES = "RECEIVE_NEW_CATEGORIES";
export const RECEIVE_CATEGORIES_FOR_INDEX = "RECEIVE_CATEGORIES_FOR_INDEX";
export const RECEIVE_CATEGORIES_FOR_CAT_ROW = "RECEIVE_CATEGORIES_FOR_CAT_ROW";
export const RECEIVE_SHOP_SHOW_CATEGORIES = "RECEIVE_SHOP_SHOW_CATEGORIES";

const receiveCategories = (categories) => {
  return({
    type: RECEIVE_NEW_CATEGORIES,
    categories
  })
};

export const receiveCategoriesForIndex = (categories) => ({
  type: RECEIVE_CATEGORIES_FOR_INDEX,
  categories
});

export const receiveCategoriesForCatRow = (categories) => ({
  type: RECEIVE_CATEGORIES_FOR_CAT_ROW,
  categories
});

export const receiveShopShowCategories = (categories) => ({
  type: RECEIVE_SHOP_SHOW_CATEGORIES,
  categories
})

export const fetchAllCategories = () => dispatch => (
  CategoryUtil.fetchAllCategories()
    .then(res => {
      dispatch(receiveCategories(res))
    })
);