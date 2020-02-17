import * as ProductUtil from '../../util/product_util';
import { receiveShopsByAssociatedProducts } from '../shop_actions';

export const RECEIVE_ASSOCIATED_PRODUCTS = "RECEIVE_ASSOCIATED_PRODUCTS";


export const receiveAssociatedProducts = (products) => ({
  type: RECEIVE_ASSOCIATED_PRODUCTS,
  products
})

export const fetchAssociatedProducts = (prodId, shopProducts) => dispatch => (
  ProductUtil.fetchAssociatedProducts(prodId, shopProducts)
    .then(ap => {
      dispatch(receiveAssociatedProducts(ap.associated_products.products));
      dispatch(receiveShopsByAssociatedProducts(ap.associated_products.shops));
    })
)