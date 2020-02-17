import * as ProductUtil from '../../util/product_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = (products) => ({
  type: RECEIVE_CATEGORIES,
  products
});

export const fetchProductCategories = () => dispatch => (
  ProductUtil.fetchProductCategories()
    .then(products => dispatch(receiveCategories(products)))
);