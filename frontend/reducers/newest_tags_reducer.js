import {
  RECEIVE_TAGS,
  RECEIVE_SUGGESTED_IDS,
  RECEIVE_SEARCH_TAG_IDS
} from '../actions/newest_tag_actions';

const NewestTagsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_TAGS:
      for(let i = 0; i < action.tags.length; i++){
        let t = action.tags[i];
        newState[t.id] = t;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SUGGESTED_IDS:
      return Object.assign({}, state, { suggestedIds : action.ids });
    case RECEIVE_SEARCH_TAG_IDS:
      return Object.assign({}, state, { searchIds : action.ids });
    default:
      return state;
  }
}

export default NewestTagsReducer;