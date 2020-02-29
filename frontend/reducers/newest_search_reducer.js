import {
  RECEIVE_SEARCHES,
  RECEIVE_SEARCH,
  RECEIVE_POPULAR_SEARCH_IDS,
  RECEIVE_SUGGESTED_TERMS
} from '../actions/newest_search_actions';

const NewestSearchReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_SEARCHES:
      for(let i = 0; i < action.searches.length; i++){
        let s = action.searches[i];
        newState[s.id] = s;
      }
      return Object.assign({}, state, newState);
    case RECEIVE_SEARCH:
      return Object.assign({}, state, { [action.search.id] : action.search });
    case RECEIVE_POPULAR_SEARCH_IDS:
      return Object.assign({}, state, { popularSearchIds : action.ids });
    case RECEIVE_SUGGESTED_TERMS:
      return Object.assign({}, state, { suggestedTerms : action.terms});
    default:
      return state;
  }
}

export default NewestSearchReducer;