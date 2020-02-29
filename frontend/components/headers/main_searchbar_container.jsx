import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainSearchBar from './main_searchbar';
import { createSearch } from '../../actions/search_actions';
// import { fetchPopularTerms } from '../../actions/search_actions';
import { fetchSearchMain } from '../../actions/search_actions';

import { fetchSuggestedTerms } from '../../actions/newest_search_actions';
import { fetchPopularSearches } from '../../actions/newest_search_actions';


const msp = (state) => ({
  // popularTerms : state.search.popularTerms,
  searches : state.entities.searches,
  tags : state.entities.tags
  // suggestedTerms : state.search.suggestedTerms
});

const mdp = dispatch => ({
  createSearch: (query) => dispatch(createSearch(query)),
  fetchSuggestedTerms: (query) => dispatch(fetchSuggestedTerms(query)),
  fetchPopularSearches: () => dispatch(fetchPopularSearches()),
  // fetchPopularTerms: () => dispatch(fetchPopularTerms()),
  // fetchSuggestedTerms: (query) => dispatch(fetchSuggestedTerms(query)),
  // fetchSuggestedTags: (query) => dispatch(fetchSuggestedTags(query)),
  fetchSearchMain : (queryStr) => dispatch(fetchSearchMain(queryStr))
});

export default withRouter(connect(msp, mdp)(MainSearchBar));