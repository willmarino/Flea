
import {
  RECEIVE_HAPPY_REVIEWS,
  HAPPY_PRODUCTS,
  HAPPY_USERS
} from '../actions/positive_reviews_actions';

const PositiveReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_HAPPY_REVIEWS:
      return Object.assign({}, state, { reviews : action.reviews });
    case HAPPY_PRODUCTS:
      return Object.assign({}, state, { products : action.products });
    case HAPPY_USERS:
      return Object.assign({}, state, { users : action.users });
    default:
      return state;
  }
}

export default PositiveReviewsReducer;