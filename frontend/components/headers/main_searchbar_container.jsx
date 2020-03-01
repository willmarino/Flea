import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainSearchBar from './main_searchbar';

import { fetchSearchMain } from '../../actions/newest_search_actions';
import { fetchSuggestedTerms } from '../../actions/newest_search_actions';
import { fetchPopularSearches } from '../../actions/newest_search_actions';
import { createSearch } from '../../actions/newest_search_actions';


const msp = (state) => ({
  searches : state.entities.searches,
  tags : state.entities.tags,
  loggedIn : Boolean(state.session.currentUser)
});

const mdp = dispatch => ({
  createSearch: (query) => dispatch(createSearch(query)),
  fetchSuggestedTerms: (query) => dispatch(fetchSuggestedTerms(query)),
  fetchPopularSearches: () => dispatch(fetchPopularSearches()),
  fetchSearchMain : (queryStr) => dispatch(fetchSearchMain(queryStr))
});

export default withRouter(connect(msp, mdp)(MainSearchBar));