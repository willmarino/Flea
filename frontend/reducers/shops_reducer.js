import {
    RECEIVE_SHOP,
    RECEIVE_SHOPS,
    REMOVE_SHOP,
    RECEIVE_SHOP_BY_PRODUCT,
    RECEIVE_PRODUCT_SHOW_SHOP
} from '../actions/shop_actions';


const ShopsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SHOP:
            return Object.assign({}, state, {[action.shop.id] : action.shop});
        case RECEIVE_SHOP_BY_PRODUCT:
            return Object.assign({}, state, { byProduct : action.shop})
        case RECEIVE_PRODUCT_SHOW_SHOP:
            return Object.assign({}, state, { byProduct : action.shop })
        case RECEIVE_SHOPS:
            return Object.assign({}, state, action.shops);
        case REMOVE_SHOP:
            let newState = Object.assign({}, state);
            delete newState[action.shopId];
            return newState;
        default:
            return state;
    }
};

export default ShopsReducer;