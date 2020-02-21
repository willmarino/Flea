// product api util functions
import * as ProductUtil from '../../util/product_util';
import { receiveCategoriesForIndex } from '../category_actions';

// 1
export const RECEIVE_INDEX = "RECEIVE_INDEX";

// 1
const receiveIndex = (products) => ({
  type: RECEIVE_INDEX,
  products
});

// 1
export const fetchIndex = () => dispatch => (
  ProductUtil.fetchIndex()
    .then(productsObj => {
      debugger;
      dispatch(receiveIndex(productsObj.products));
      dispatch(receiveCategoriesForIndex(productsObj.categories));
    })
)