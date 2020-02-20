import {
  RECEIVE_USED_TERM,
  RECEIVE_POPULAR_TERMS,
  RECEIVE_SUGGESTED_TERMS,
  RECEIVE_SEARCH_PRODUCTS,
  RECEIVE_RECENTLY_VIEWED,
  RECEIVE_ASSOCIATED_WITH_RECENTLY_VIEWED,
  RECEIVE_RECOMMENDED_TAGS,
  RECEIVE_FILTERS
} from '../actions/search_actions';

const SearchReducer = (state={}, action) => {
  Object.freeze(state);
  let usedTerms;
  switch(action.type){
    case RECEIVE_USED_TERM:
      if(state.usedTerms){
        usedTerms = state.usedTerms;
        usedTerms.push(action.term);
      }else{
        usedTerms = [action.term];
      }
      return Object.assign([], state, { usedTerms : usedTerms });

    case RECEIVE_POPULAR_TERMS:
      return Object.assign({}, state, { popularTerms : action.terms });
    case RECEIVE_SUGGESTED_TERMS:
      return Object.assign({}, state, { suggestedTerms : action.terms });
    case RECEIVE_SEARCH_PRODUCTS:
      return Object.assign({}, state, { searchProducts : action.products });
    case RECEIVE_RECENTLY_VIEWED:
      return Object.assign({}, state, { recentlyViewedProducts : action.products });
    case RECEIVE_ASSOCIATED_WITH_RECENTLY_VIEWED:
      return Object.assign({}, state, { associatedWithRecentProducts : action.products });
    case RECEIVE_RECOMMENDED_TAGS:
      return Object.assign({}, state, { recommendedTags : action.tags });
    case RECEIVE_FILTERS:
      return Object.assign({}, state, { filters : action.filters });
    default:
      return state;
  }
}

export default SearchReducer;