import { RECEIVE_SHOP_REVIEW_PRODUCTS } from '../../actions/products/products_by_reviews_actions';

const ProductsByReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHOP_REVIEW_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

export default ProductsByReviewsReducer;