import { RECEIVE_SHOP_REVIEWS } from '../../actions/reviews/reviews_by_shop_actions';

const ReviewsByShopReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHOP_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export default ReviewsByShopReducer;