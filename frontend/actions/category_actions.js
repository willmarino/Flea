import * as CategoryUtil from '../util/category_util';

export const RECEIVE_NEW_CATEGORIES = "RECEIVE_NEW_CATEGORIES";

const receiveCategories = (categories) => {
  return({
    type: RECEIVE_NEW_CATEGORIES,
    categories
  })
}

export const fetchAllCategories = () => dispatch => (
  CategoryUtil.fetchAllCategories()
    .then(res => {
      dispatch(receiveCategories(res))
    })
)