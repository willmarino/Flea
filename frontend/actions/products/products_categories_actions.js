import * as ProductUtil from '../../util/product_util';
import { receiveCategoriesForCatRow } from '../category_actions';
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = (products) => ({
  type: RECEIVE_CATEGORIES,
  products
});

export const fetchProductCategories = () => dispatch => (
  ProductUtil.fetchProductCategories()
    .then(productsObj => {
      dispatch(receiveCategories(productsObj.products));
      dispatch(receiveCategoriesForCatRow(productsObj.categories));
    })
);