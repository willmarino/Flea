import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';

import { RECEIVE_PRODUCT_REVIEWS } from '../actions/product_actions';
import { RECEIVE_HAPPY_REVIEWS, RECEIVE_SHOP_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state={}, action) => {
  if(action.type === RECEIVE_REVIEWS){
  }
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id] : action.review});
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_PRODUCT_REVIEWS:
      return Object.assign({}, state, { byProduct : action.reviews});
    case RECEIVE_SHOP_REVIEWS:
      return Object.assign({}, state, { byShop : action.reviews});
    case RECEIVE_HAPPY_REVIEWS:
      return Object.assign({}, state, { happyReviews : action.reviews})
    default:
      return state;
  }
};

export default ReviewsReducer;