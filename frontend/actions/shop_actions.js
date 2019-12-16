import * as ShopApiUtil from '../util/shop_util';

export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_SHOPS = "RECEIVE_SHOPS";
export const REMOVE_SHOP = "REMOVE_SHOP";

const receiveShop = (shop) => ({
    type: RECEIVE_SHOP,
    shop
});

const receiveShops = (shops) => ({
    type: RECEIVE_SHOPS,
    shops
});

const removeShop = (shopId) => ({
    type: REMOVE_SHOP,
    shopId
});


export const fetchShops = () => dispatch => (
    ShopApiUtil.fetchShops()
        .then(shops => dispatch(receiveShops(shops)))
);

export const fetchShop = (shopId) => dispatch =>(
    ShopApiUtil.fetchShop(shopId)
        .then(shop => dispatch(receiveShop(shop)))
);

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

