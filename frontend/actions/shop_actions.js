import * as ShopApiUtil from '../util/shop_util';

// import { RECEIVE_REVIEWS } from '../actions/review_actions';

export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_SHOPS = "RECEIVE_SHOPS";
export const REMOVE_SHOP = "REMOVE_SHOP";
export const RECEIVE_SHOP_BY_PRODUCT = "RECEIVE_SHOP_BY_PRODUCT";
export const RECEIVE_SHOPS_BY_PRODUCTS = "RECEIVE_SHOPS_BY_PRODUCT";
export const RECEIVE_SHOPS_BY_ASSOCIATED_PRODUCTS = "RECEIVE_SHOPS_BY_ASSOCIATED_PRODUCTS";
export const RECEIVE_PRODUCT_SHOW_SHOP = "RECEIVE_PRODUCT_SHOW_SHOP";

import { receiveShopReviews} from '../actions/reviews/reviews_by_shop_actions';
import { receiveTagsForShopReviews } from '../actions/tag_actions';

import { receiveShopReviewProducts } from '../actions/products/products_by_reviews_actions';

// products by shop
import { receiveProductsByShop } from './products/products_by_shop_actions';

// reviews by user
import { receiveShopReviewAuthors } from '../actions/reviews/reviews_by_user_actions';

// user by shop
import { receiveShopOwner } from '../actions/users/users_by_shop_actions';

import { receiveShopShowCategories } from '../actions/category_actions';

const receiveShop = (shop) => ({
    type: RECEIVE_SHOP,
    shop
});

export const receiveShops = (shops) => ({
    type: RECEIVE_SHOPS,
    shops
});

const removeShop = (shopId) => ({
    type: REMOVE_SHOP,
    shopId
});

// const receiveShopReviews = (reviews) => ({
//     type: RECEIVE_REVIEWS,
//     reviews
// })

export const receiveShopsByAssociatedProducts = (shops) => ({
    type: RECEIVE_SHOPS_BY_ASSOCIATED_PRODUCTS,
    shops
})

export const receiveShopByProduct = (shop) => ({
    type: RECEIVE_SHOP_BY_PRODUCT,
    shop
})

export const receiveShopsByProducts = (shops) => ({
    type: RECEIVE_SHOPS_BY_PRODUCTS,
    shops
})

export const receiveProductShowShop = (shop) => ({
    type: RECEIVE_PRODUCT_SHOW_SHOP,
    shop
})


export const fetchShops = () => dispatch => (
    ShopApiUtil.fetchShops()
        .then(shops => dispatch(receiveShops(shops)))
);

export const fetchShop = (shopId) => dispatch =>(
    ShopApiUtil.fetchShop(shopId)
        .then(shop => dispatch(receiveShop(shop)))
);

export const fetchShopReviews = (shopId) => dispatch => (
    ShopApiUtil.fetchShopReviews(shopId)
        .then(reviews => dispatch(receiveShopReviews(reviews)))
)

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

// ---------------------------------------------------------------------------------------------------------------

export const fetchShopShow = (shopId) => dispatch => (
    ShopApiUtil.fetchShopShow(shopId)
        .then(ss => {
            dispatch(receiveShop(ss.shop_show.shop));
            dispatch(receiveShopOwner(ss.shop_show.owner));
            dispatch(receiveProductsByShop(ss.shop_show.products)); 
            dispatch(receiveShopReviews(ss.shop_show.reviews));
            dispatch(receiveShopReviewAuthors(ss.shop_show.authors));
            dispatch(receiveShopReviewProducts(ss.shop_show.review_products));
            dispatch(receiveTagsForShopReviews(ss.shop_show.review_product_tags));
            dispatch(receiveShopShowCategories(ss.shop_show.categories))
        })
);