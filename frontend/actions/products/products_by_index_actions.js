// product api util functions
import * as ProductUtil from '../../util/product_util';


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
    .then(products => dispatch(receiveIndex(products)))
)