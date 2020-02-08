import * as ProductUtil from '../util/product_util';
import { receiveShopByProduct, receiveProductShowShop } from '../actions/shop_actions';
import { receiveShopReviewAuthors, receiveProductReviewAuthors } from '../actions/users_actions';


export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_PRODUCT_REVIEWS = "RECEIVE_PRODUCT_REVIEWS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_INDEX = "RECEIVE_INDEX";

export const RECEIVE_PRODUCT_SHOW_PRODUCT = "RECEIVE_PRODUCT_SHOW_PRODUCT";
export const RECEIVE_SHOP_REVIEWS = "RECEIVE_SHOP_REVIEWS";

export const RECEIVE_SHOP_REVIEW_PRODUCTS = 'RECEIVE_SHOP_REVIEW_PRODUCTS';

const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
});

const receiveCategory = (products) => ({
  type: RECEIVE_CATEGORY,
  products
});

// duplicated, also in review actions

const receiveCategories = (products) => ({
  type: RECEIVE_CATEGORIES,
  products
});

const receiveIndex = (products) => ({
  type: RECEIVE_INDEX,
  products
});
// --------------------------------------------------
const receiveProductShowProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const receiveProductReviews = (reviews) => ({
  type: RECEIVE_PRODUCT_REVIEWS,
  reviews
});

const receiveShopReviews = (reviews) => ({
  type: RECEIVE_SHOP_REVIEWS,
  reviews
})
// --------------------------------------------------


const receiveShopReviewProducts = (products) => ({
  type: RECEIVE_SHOP_REVIEW_PRODUCTS,
  products
})


export const fetchProduct = (productId) => dispatch => (
  ProductUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)))
);

export const fetchProducts = () => dispatch => (
  ProductUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
);

export const deleteProduct = (productId) => dispatch => (
  ProductUtil.removeProduct(productId)
    .then((product) => dispatch(removeProduct(product.id)))
);

export const createProduct = (shopId, product) => dispatch => (
  ProductUtil.createProduct(shopId, product)
    .then(product => dispatch(receiveProduct(product)))
);

export const updateProduct = (product) => dispatch => (
  ProductUtil.updateProduct(product)
    .then(product => dispatch(receiveProduct(product)))
);

// --------------------------------------------------------------------------------

export const productsByCategory = (category) => dispatch => (
  ProductUtil.fetchByCategory(category)
      .then(products => dispatch(receiveCategory(products)))
);

export const productReviews = (id) => dispatch => (
  ProductUtil.fetchProductReviews(id)
      .then(reviews => dispatch(receiveProductReviews(reviews)))
);
// fetch for cat row
export const productCategories = () => dispatch => (
  ProductUtil.fetchProductCategories()
    .then(products => dispatch(receiveCategories(products)))
);

export const fetchIndex = () => dispatch => (
  ProductUtil.fetchIndex()
    .then(products => dispatch(receiveIndex(products)))
)

export const fetchShopByProduct = (prodId) => dispatch => (
  ProductUtil.fetchShopByProduct(prodId)
    .then(shop => dispatch(receiveShopByProduct(shop)))
)

export const fetchProductShow = (prodId) => dispatch => (
  ProductUtil.fetchProductShow(prodId)
    .then(ps => {
      dispatch(receiveProductShowProduct(ps.product_show.product));
      dispatch(receiveProductShowShop(ps.product_show.shop));
      dispatch(receiveProductReviews(ps.product_show.product_reviews));
      dispatch(receiveShopReviews(ps.product_show.shop_reviews));
      dispatch(receiveProductReviewAuthors(ps.product_show.product_review_authors));
      dispatch(receiveShopReviewAuthors(ps.product_show.shop_review_authors));
      dispatch(receiveShopReviewProducts(ps.product_show.shop_review_products));
    })
)