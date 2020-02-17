import { RECEIVE_PRODUCT_REVIEWS } from '../../actions/reviews/reviews_by_product_actions';

const ReviewsByProductReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCT_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export default ReviewsByProductReducer;