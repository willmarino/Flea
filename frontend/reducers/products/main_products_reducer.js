import {
  // RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
  // RECEIVE_CATEGORY,
  // RECEIVE_CATEGORIES,
  // RECEIVE_SHOP_REVIEW_PRODUCTS,
  // RECEIVE_PRODUCTS_BY_SHOP,
  // RECEIVE_ASSOCIATED_PRODUCTS,
  // RECEIVE_CART_PRODUCTS,
  // RECEIVE_CART_PRODUCT,
  // REMOVE_CART_PRODUCT
} from '../../actions/product_actions';

import {
  RECEIVE_RECENTLY_VIEWED_PRODUCTS
} from '../../actions/view_actions';

// import { RECEIVE_ASSOCIATED_PRODUCTS } from '../actions/products/products_by_association_actions';

// import { HAPPY_PRODUCTS } from '../actions/review_actions';

// import { RECENTLY_VIEWED_PRODUCTS } from '../actions/users_actions';

// import { HAPPY_PRODUCTS } from '../actions/positive_reviews_actions';
// import { RECEIVE_SHOP_REVIEW_PRODUCTS } from '../actions/products/products_by_reviews_actions';
// import { RECEIVE_PRODUCTS_BY_SHOP } from '../actions/products/products_by_shop_actions';

const MainProductsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    // case RECEIVE_CART_PRODUCT:
    //   if(state.byCart){
    //     byCart = state.byCart;
    //     byCart[action.product.id] = action.product;
    //     return Object.assign({}, state, { byCart : byCart });
    //   }else{
    //     byCart = {[action.product.id] : action.product};
    //   }
    // case REMOVE_CART_PRODUCT:
    //   newState = Object.assign({}, state.byCart);
    //   delete newState[action.id];
    //   return newState;
    // case RECEIVE_CART_PRODUCTS:
    //   byCart = {};
    //   for(let i = 0; i < action.products.length; i++){
    //     let p = action.products[i];
    //     byCart[p.id] = p;
    //   }
    //   return Object.assign({}, state, { byCart : byCart })
    // case RECEIVE_ASSOCIATED_PRODUCTS:
    //   return Object.assign({}, state, { associated : action.products })
    // case RECEIVE_PRODUCTS_BY_SHOP:
    //   return Object.assign({}, state, { shopProducts : action.products })
    // case RECEIVE_SHOP_REVIEW_PRODUCTS:
    //   return Object.assign({}, state, { shopReviewProducts : action.products })
    // case HAPPY_PRODUCTS:
    //   return Object.assign({}, state, {happyProducts : action.products})
    // case RECEIVE_CATEGORIES:
    //   return Object.assign({}, state, {categories: action.products})
    // case RECENTLY_VIEWED_PRODUCTS:
    //   return Object.assign({}, state, action.products);
    // case RECEIVE_CATEGORY:
    //   return Object.assign({}, state, action.products)
    // case RECEIVE_PRODUCTS:
    //   return Object.assign({}, state, action.products);
    case RECEIVE_RECENTLY_VIEWED_PRODUCTS:
      return Object.assign({}, state, { recentlyViewed : action.products })
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    // case RECEIVE_INDEX:
    //   return Object.assign({}, state, {index : action.products});
    case REMOVE_PRODUCT:
      newState = Object.assign({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default MainProductsReducer;

// receive cart product, remove cart product, receive cart products
// receive associated products
// receive products by shop
// receive shop review products
// receive happy review products
// receive products by categories
// receive recently viewed products
// receive product index for splash page
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 