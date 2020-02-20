import { connect } from 'react-redux';
import MainSearchBar from './main_searchbar';
import { createSearch } from '../../actions/search_actions';
import { fetchPopularTerms } from '../../actions/search_actions';
import { fetchSuggestedTerms } from '../../actions/search_actions';

const msp = (state) => ({
  popularTerms : state.search.popularTerms,
  suggestedTerms : state.search.suggestedTerms
});

const mdp = dispatch => ({
  createSearch: (query) => dispatch(createSearch(query)),
  fetchPopularTerms: () => dispatch(fetchPopularTerms()),
  fetchSuggestedTerms: (query) => dispatch(fetchSuggestedTerms(query))
});

export default connect(msp, mdp)(MainSearchBar);