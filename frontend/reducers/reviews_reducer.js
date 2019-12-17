import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';

const ReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.type.id] : action.type});
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.type);
    default:
      return state;
  }
};

export default ReviewsReducer;