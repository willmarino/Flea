import * as SearchUtil from '../util/search_util';

// fetchsearchmain
import { receiveFilters } from '../actions/newest_filters_actions';
import { receiveProducts, receiveSearchProductIds, receiveRecentlyViewedIds, receiveAssociatedIds } from '../actions/newest_product_actions';
import { receiveShops } from '../actions/newest_shop_actions';
import { receiveCategories } from './newest_categories_actions';
import { receiveTags, receiveSearchTagIds } from './newest_tag_actions';
import { receivePageLoaded, receiveClearPageLoaded } from './newest_page_loaded_actions';

export const RECEIVE_SEARCHES = "RECEIVE_SEARCHES";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_POPULAR_SEARCH_IDS = "RECEIVE_POPULAR_SEARCH_IDS";
export const RECEIVE_SUGGESTED_TERMS = "RECEIVE_SUGGESTED_TERMS";

const receiveSearches = (searches) => ({
  type: RECEIVE_SEARCHES,
  searches
});

const receiveSearch = (search) => ({
  type: RECEIVE_SEARCH,
  search
});

const receivePopularSearchIds = (ids) => ({
  type: RECEIVE_POPULAR_SEARCH_IDS,
  ids
});

const receiveSuggestedTerms = (terms) => ({
  type: RECEIVE_SUGGESTED_TERMS,
  terms
});

export const createSearch = (query) => dispatch => (
  SearchUtil.createSearch(query)
    .then(res => dispatch(receiveSearch(res.search)))
)

// popular searches are the searches that are displayed in the searchbar modal when the searchbar is in focus,
//  but nothing has been typed into it
export const fetchPopularSearches = () => dispatch => (
  SearchUtil.fetchPopularSearches()
    .then(res => {
      dispatch(receiveSearches(res.searches));
      dispatch(receivePopularSearchIds(res.searches.map((search) => search.id)));
    })
);

// this fetches the terms which match to whatever the query is that is being typed
export const fetchSuggestedTerms = (query) => dispatch => (
  SearchUtil.fetchSuggestedTerms(query)
    .then(res => {
      dispatch(receiveSuggestedTerms(res.terms));
    })
);

export const fetchSearchMain = (queryStr) => dispatch => (
  SearchUtil.fetchSearchMain(queryStr)
    .then(res => {
      dispatch(receiveClearPageLoaded());
      dispatch(receiveFilters(res.filters));
      dispatch(receiveProducts(res.products));
      dispatch(receiveShops(res.shops));
      dispatch(receiveCategories(res.categories));
      dispatch(receiveTags(res.tags));
      dispatch(receiveSearchTagIds(res.tag_ids));
      dispatch(receiveSearchProductIds(res.product_ids));
      dispatch(receivePageLoaded('searchmain')); 
    })
)

export const fetchSearchMainFooter = (limit) => dispatch => (
  SearchUtil.fetchSearchMainFooter(limit)
    .then(res => {
      dispatch(receiveShops(res.shops));
      dispatch(receiveProducts(res.products));
      dispatch(receiveRecentlyViewedIds(res.recent_ids));
      dispatch(receiveAssociatedIds(res.associated_ids));
    })
)