import {
  RECEIVE_TAGS_FOR_SHOP_REVIEWS
} from '../actions/tag_actions';

const TagsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TAGS_FOR_SHOP_REVIEWS:
      return Object.assign({}, state, { shopReviewTags : action.tags })
    default:
      return state;
  }
}

export default TagsReducer;