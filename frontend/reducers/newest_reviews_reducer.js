import {
  RECEIVE_HAPPY_REVIEW_IDS,
  RECEIVE_REVIEWS,
  RECEIVE_PRODUCT_REVIEW_IDS,
  RECEIVE_SHOP_REVIEW_IDS
} from '../actions/newest_reviews_actions';

const NewestReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_REVIEWS:
      for(let i = 0; i < action.reviews.length; i++){
        let r = action.reviews[i];
        newState[r.id] = r;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_HAPPY_REVIEW_IDS:
      return Object.assign({}, state, { happyReviewIds : action.ids });
    case RECEIVE_SHOP_REVIEW_IDS:
      return Object.assign({}, state, { shopReviewIds : action.ids })
    case RECEIVE_PRODUCT_REVIEW_IDS:
      return Object.assign({}, state, { productReviewIds : action.ids })
    default:
      return state;
  }
}

export default NewestReviewsReducer;