import * as ShopUtil from '../util/shop_util';

// fetchshopShow
import { receiveShopProductIds, receiveProducts } from './newest_product_actions';
import { receiveUsers } from './users_actions';
import { receiveReviews, receiveShopReviewIds } from './newest_reviews_actions';
import { receiveCategories } from './newest_categories_actions';
import { receivePageLoaded } from './newest_page_loaded_actions';

// fetchOwnedShopInfo
import { receiveViews, receiveShopProductViewIds } from './view_actions';
import { receiveShopViews, receiveShopViewsIds } from './shop_view_actions';
import { receiveOrders, receiveShopOrdersIds } from './order_actions';
import { receiveProductOrders, receiveShopProductOrderIds } from './product_orders_actions';

// create new shop product
import { receiveShopProductId } from './newest_product_actions';

// fetchTrendingItems imports
import { receiveProduct, receiveMostBoughtProduct } from '../actions/newest_product_actions';

export const RECEIVE_SHOPS = "RECEIVE_SHOPS";
export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_OWNED_SHOP_IDS = "RECEIVE_OWNED_SHOP_IDS";
export const RECEIVE_MOST_VIEWED_SHOP_ID = "RECEIVE_MOST_VIEWED_SHOP_ID";
export const RECEIVE_MOST_ORDERED_SHOP_ID = "RECEIVE_MOST_ORDERED_SHOP_ID";

export const receiveShops = (shops) => {
  return({
    type: RECEIVE_SHOPS,
    shops
  })
};

export const receiveShop = (shop) => ({
  type: RECEIVE_SHOP,
  shop
});

export const receiveOwnedShopIds = (ids) => ({
  type : RECEIVE_OWNED_SHOP_IDS,
  ids
});

export const receiveMostViewedShopId = (id) => ({
  type : RECEIVE_MOST_VIEWED_SHOP_ID,
  id
});

export const receiveMostOrderedShopId = (id) => ({
  type : RECEIVE_MOST_ORDERED_SHOP_ID,
  id
})

export const createShop = (shop) => dispatch =>(
  ShopApiUtil.createShop(shop)
      .then(shop => dispatch(receiveShop(shop)))
);

export const updateShop = shop => dispatch => (
  ShopApiUtil.updateShop(shop)
      .then(shop => dispatch(receiveShop(shop)))
);

export const deleteShop = shopId => dispatch => (
  ShopApiUtil.deleteShop(shopId)
      .then((shop) => dispatch(removeShop(shop.id)))
);

export const fetchShopShow = (shopId) => dispatch => (
  ShopUtil.fetchShopShow(shopId)
    .then(res => {
      dispatch(receiveProducts(res.products));
      dispatch(receiveShop(res.shop));
      dispatch(receiveReviews(res.reviews));
      dispatch(receiveUsers(res.users));
      dispatch(receiveCategories(res.categories))
      dispatch(receiveShopProductIds(res.shopProductIds));
      dispatch(receiveShopReviewIds(res.shopReviewIds));
      dispatch(receivePageLoaded('shopshow'));
    })
);

// shop manager
export const fetchOwnedShops = () => dispatch => (
  ShopUtil.fetchOwnedShops()
    .then(res => {
      dispatch(receiveShops(res.shops));
      dispatch(receiveOwnedShopIds(res.shop_ids));
    })
);

// shop manager dashboard
export const fetchOwnedShopInfo = () => dispatch => (
  ShopUtil.fetchOwnedShopInfo()
    .then(res => {
      dispatch(receiveViews(res.shop_product_views));
      dispatch(receiveShopProductViewIds(res.shop_product_view_ids));
      dispatch(receiveShopViews(res.shop_views));
      dispatch(receiveShopViewsIds(res.shop_view_ids));
      dispatch(receiveOrders(res.orders));
      dispatch(receiveShopOrdersIds(res.order_ids));
      dispatch(receiveProductOrders(res.product_orders));
      dispatch(receiveShopProductOrderIds(res.product_order_ids));
      dispatch(receiveProducts(res.shop_products));
      dispatch(receiveShopProductIds(res.shop_product_ids));
      dispatch(receivePageLoaded('SM-dashboard-main'));
    })
);

export const fetchOwnedShopView = (id) => dispatch => (
  ShopUtil.fetchOwnedShopView(id)
    .then(res => {
      dispatch(receiveShop(res.shop));
      dispatch(receiveProducts(res.products));
      dispatch(receiveShopProductIds(res.product_ids));
      dispatch(receiveCategories(res.categories));
      dispatch(receiveUsers(res.user));
      dispatch(receivePageLoaded("ownedshop"));
    })
);

export const fetchOwnedShopListings = (id) => dispatch => {
  return(
    ShopUtil.fetchOwnedShopListings(id)
      .then(res => {
        dispatch(receiveProducts(res.products));
        dispatch(receiveShopProductIds(res.product_ids));
      })
  )
};

export const createShopProduct = (id, formData) => dispatch => (
  ShopUtil.createShopProduct(id, formData)
    .then(res => {
      dispatch(receiveProducts(res.product));
      dispatch(receiveShopProductId(res.product_ids));
    })
);


export const fetchTrendingItems = () => dispatch => (
  ShopUtil.fetchTrendingItems()
    .then(res => {
      dispatch(receiveShop(res.mostViewedShop));
      dispatch(receiveMostViewedShopId(res.mostViewedShop.id));
      dispatch(receiveShop(res.mostOrderedShop));
      dispatch(receiveMostOrderedShopId(res.mostOrderedShop.id));
      dispatch(receiveProduct(res.mostBoughtProduct));
      dispatch(receiveMostBoughtProduct(res.mostBoughtProduct.id));
    })
);


// fetch shop for display in product preview info container
export const fetchShopByProductId = (productId) => dispatch => (
  ShopUtil.fetchShopByProductId(productId)
    .then((shop) => {
      dispatch(receiveShop(shop));
    })
);