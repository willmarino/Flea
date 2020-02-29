import * as ShopUtil from '../util/shop_util';

// fetchshopShow
import { receiveShopProductIds, receiveProducts } from './newest_product_actions';
import { receiveUsers } from './users_actions';
import { receiveReviews, receiveShopReviewIds } from './newest_reviews_actions';
import { receiveCategories } from './newest_categories_actions';
import { receivePageLoaded } from './newest_page_loaded_actions';

export const RECEIVE_SHOPS = "RECEIVE_SHOPS";
export const RECEIVE_SHOP = "RECEIVE_SHOP";


export const receiveShops = (shops) => ({
  type: RECEIVE_SHOPS,
  shops
});

export const receiveShop = (shop) => ({
  type: RECEIVE_SHOP,
  shop
});

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
      // dispatch(receiveShop(ss.shop_show.shop));
      // dispatch(receiveShopOwner(ss.shop_show.owner));
      // dispatch(receiveProductsByShop(ss.shop_show.products)); 
      // dispatch(receiveShopReviews(ss.shop_show.reviews));
      // dispatch(receiveShopReviewAuthors(ss.shop_show.authors));
      // dispatch(receiveShopReviewProducts(ss.shop_show.review_products));
      // dispatch(receiveTagsForShopReviews(ss.shop_show.review_product_tags));
      // dispatch(receiveShopShowCategories(ss.shop_show.categories));
    })
);