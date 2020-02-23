import * as SearchUtil from '../util/search_util';
import { receiveSuggestedSearchTags } from '../actions/tag_actions';

export const RECEIVE_USED_TERM = "RECEIVE_USED_TERM";
export const RECEIVE_POPULAR_TERMS = "RECEIVE_POPULAR_TERMS";
export const RECEIVE_SUGGESTED_TERMS = "RECEIVE_SUGGESTED_TERMS";
export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";
export const RECEIVE_RECENTLY_VIEWED = "RECEIVE_RECENTLY_VIEWED";
export const RECEIVE_ASSOCIATED_RV = "RECEIVE_ASSOCIATED_RV";
export const RECEIVE_RECOMMENDED_TAGS = "RECEIVE_RECOMMENDED_TAGS";
export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
export const RECEIVE_SEARCH_CATEGORIES = "RECEIVE_SEARCH_CATEGORIES";

const receiveUsedTerm = (term) => ({
  type: RECEIVE_USED_TERM,
  term
});
const receivePopularTerms = (terms) => ({
  type: RECEIVE_POPULAR_TERMS,
  terms
});
const receiveSuggestedTerms = (terms) => ({
  type: RECEIVE_SUGGESTED_TERMS,
  terms
});
const receiveSearchProducts = (products) => ({
  type: RECEIVE_SEARCH_PRODUCTS,
  products
});
const receiveRecentlyViewed = (products) => ({
  type: RECEIVE_RECENTLY_VIEWED,
  products
});
const receiveAssociatedRV = (products) => ({
  type: RECEIVE_ASSOCIATED_RV,
  products
});
const receiveRecommendedTags = (tags) => ({
  type: RECEIVE_RECOMMENDED_TAGS,
  tags
});
const receiveFilters = (filters) => ({
  type: RECEIVE_FILTERS,
  filters
});
const receiveSearchCategories = (categories) => ({
  type: RECEIVE_SEARCH_CATEGORIES,
  categories
});

export const createSearch = (query) => dispatch => (
  SearchUtil.createSearch(query)
    .then(obj => {
      dispatch(receiveUsedTerm(obj.search))
    })
)

export const fetchPopularTerms = () => (dispatch) => (
  SearchUtil.fetchPopularTerms()
    .then(terms => dispatch(receivePopularTerms(terms)))
)

export const fetchSuggestedTerms = (queryStr) => dispatch => (
  SearchUtil.fetchSuggestedTerms(queryStr)
    .then(terms => dispatch(receiveSuggestedTerms(terms.terms)))
)

export const fetchSuggestedSearches = () => dispatch => (
  SearchUtil.fetchSuggestedSearches()
    // .then(searches => dispatch(receiveSuggestedSearches(searches)))
    .then(tags => {
      dispatch(receiveSuggestedSearchTags(tags.tags));
    })
)

export const fetchSearchMain = (queryStr) => dispatch => (
  SearchUtil.fetchSearchMain(queryStr)
    .then(searchObj => {
      dispatch(receiveSearchProducts(searchObj.products));
      dispatch(receiveRecentlyViewed(searchObj.recentProducts));
      dispatch(receiveAssociatedRV(searchObj.associatedProducts));
      dispatch(receiveRecommendedTags(searchObj.tags));
      dispatch(receiveFilters(searchObj.filters));
      dispatch(receiveSearchCategories(searchObj.categories))
    })
)