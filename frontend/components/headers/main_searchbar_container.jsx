import { connect } from 'react-redux';
import MainSearchBar from './main_searchbar';
import { createSearch } from '../../actions/search_actions';

const msp = (state) => ({

});

const mdp = dispatch => ({
  createSearch: (query) => dispatch(createSearch(query))
});

export default connect(msp, mdp)(MainSearchBar);