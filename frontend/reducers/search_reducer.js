import {
  RECEIVE_USED_TERM,
  RECEIVE_POPULAR_TERMS,
  RECEIVE_SUGGESTED_TERMS,
  RECEIVE_SEARCH_PRODUCTS,
  RECEIVE_RECENTLY_VIEWED,
  RECEIVE_ASSOCIATED_RV,
  RECEIVE_RECOMMENDED_TAGS,
  RECEIVE_FILTERS,
  RECEIVE_SEARCH_CATEGORIES
} from '../actions/search_actions';
import {
  RECEIVE_SUGGESTED_SEARCH_TAGS
} from '../actions/tag_actions';

const SearchReducer = (state={}, action) => {
  Object.freeze(state);
  if(action.type === RECEIVE_SUGGESTED_SEARCH_TAGS) debugger;
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
    case RECEIVE_ASSOCIATED_RV:
      return Object.assign({}, state, { associatedWithRecentProducts : action.products });
    case RECEIVE_RECOMMENDED_TAGS:
      return Object.assign({}, state, { recommendedTags : action.tags });
    case RECEIVE_FILTERS:
      return Object.assign({}, state, { filters : action.filters });
    case RECEIVE_SEARCH_CATEGORIES:
      return Object.assign({}, state, { productCategories : action.categories });
    case RECEIVE_SUGGESTED_SEARCH_TAGS:
      return Object.assign({}, state, { suggestedSearchTags : action.tags });
    default:
      return state;
  }
}

export default SearchReducer;