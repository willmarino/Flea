import * as ProductUtil from '../util/product_util';

// fetchIndex imports
import { receiveCategories } from './newest_categories_actions';
import { receivePageLoaded } from './newest_page_loaded_actions';

// fetchproductshow imports
import { receiveShop } from './newest_shop_actions';
import { receiveReviews } from './newest_reviews_actions';
import { receiveProductReviewIds } from './newest_reviews_actions';
import { receiveShopReviewIds } from './newest_reviews_actions';
import { receiveUsers } from './users_actions';

// fetchassociatedproducts imports
import { receiveShops } from './newest_shop_actions';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_INDEX_IDS = "RECEIVE_INDEX_IDS";
export const RECEIVE_CATEGORY_ROW_IDS = "RECEIVE_CATEGORY_ROW_IDS";
export const RECEIVE_RECENTLY_VIEWED_IDS = "RECEIVE_RECENTLY_VIEWED_IDS";
export const RECEIVE_RECENTLY_VIEWED_ID = "RECEIVE_RECENTLY_VIEWED_ID";
export const RECEIVE_HAPPY_PRODUCT_IDS = "RECEIVE_HAPPY_PRODUCT_IDS";
export const RECEIVE_SEARCH_PRODUCT_IDS = "RECEIVE_SEARCH_PRODUCT_IDS";
export const RECEIVE_SHOP_PRODUCT_ID = "RECEIVE_SHOP_PRODUCT_ID"

// fetchProductsByShop
export const RECEIVE_SHOP_PRODUCT_IDS = "RECEIVE_SHOP_PRODUCT_IDS";

// fetchassociatedProducts
export const RECEIVE_ASSOCIATED_IDS = "RECEIVE_ASSOCIATED_IDS";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
});

const receiveIndexIds = (ids) => ({
  type: RECEIVE_INDEX_IDS,
  ids
});

const receiveCategoryRowIds = (ids) => ({
  type: RECEIVE_CATEGORY_ROW_IDS,
  ids
})

export const receiveRecentlyViewedIds = (ids) => ({
  type: RECEIVE_RECENTLY_VIEWED_IDS,
  ids
});

export const receiveRecentlyViewedId = (id) => ({
  type: RECEIVE_RECENTLY_VIEWED_ID,
  id
});

export const receiveShopProductIds = (ids) => ({
  type: RECEIVE_SHOP_PRODUCT_IDS,
  ids
});

export const receiveShopProductId = (id) => ({
  type: RECEIVE_SHOP_PRODUCT_ID,
  id
})

export const receiveAssociatedIds = (ids) => ({
  type: RECEIVE_ASSOCIATED_IDS,
  ids
});

// main happpy review function is in reviews actions
export const receiveHappyProductIds = (ids) => ({
  type: RECEIVE_HAPPY_PRODUCT_IDS,
  ids
});

// for search function in search actions
export const receiveSearchProductIds = (ids) => ({
  type: RECEIVE_SEARCH_PRODUCT_IDS,
  ids
});



// --------------------------------------------------------------------------------------------------------

export const fetchProduct = (id) => dispatch => (
  ProductUtil.fetchProduct(id)
    .then(res => {
      dispatch(receiveProduct(res.product));
    })
)

export const fetchIndex = () => (dispatch) => (
  ProductUtil.fetchIndex()
    .then(res => {
      dispatch(receiveProducts(res.products));
      dispatch(receiveCategories(res.categories));
      dispatch(receiveCategoryRowIds(res.category_row_product_ids));
      dispatch(receiveIndexIds(res.ids));
      // dispatch(receivePageLoaded("main"))
    })
);

export const fetchRecentlyViewedProducts = (limit) => (dispatch) => (
  ProductUtil.fetchRecentlyViewedProducts(limit)
    .then(res => {
      dispatch(receiveProducts(res.products));
      dispatch(receiveRecentlyViewedIds(res.ids));
    })
);
// curProdId => product => shop => reviews => authors, I just need controller logic, not ids in redux state
export const fetchProductShow = (prodId) => dispatch => (
  ProductUtil.fetchProductShow(prodId)
    .then(res => {
      dispatch(receiveShop(res.shops));
      dispatch(receiveReviews(res.reviews)); 
      dispatch(receiveUsers(res.users))
      dispatch(receiveProducts(res.products));
      dispatch(receiveProductReviewIds(res.product_review_ids));
      dispatch(receiveShopReviewIds(res.shop_review_ids));
    })
)

export const fetchProductsByShop = (shopId, prodId, num) => dispatch => (
  ProductUtil.fetchProductsByShop(shopId, prodId, num)
    .then(res => {
      dispatch(receiveProducts(res.products));
      dispatch(receiveShopProductIds(res.productIds));
    })
)

// for product show page footer 2, fetch products which are not in a certain collection, and are associated the with a main product
export const fetchAssociatedProducts = (prodId, shopProducts, num) => dispatch => (
  ProductUtil.fetchAssociatedProducts(prodId, shopProducts, num)
    .then(res => {
      dispatch(receiveShops(res.shops));
      dispatch(receiveProducts(res.products));
      dispatch(receiveAssociatedIds(res.productIds));
    })
);

export const updateShopProduct = (prodId, formData) => dispatch => (
  ProductUtil.updateProduct(prodId, formData)
    .then(res => {
      dispatch(receiveProduct(res.product));
      dispatch(receiveShopProductId(prodId));
    })
);