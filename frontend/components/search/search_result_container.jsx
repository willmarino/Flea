import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from './search_result';
import { fetchSearchMain, createSearch } from '../../actions/newest_search_actions';

const msp = (state, ownProps) => {
  let wholeQueryString = ownProps.location.search
  let queryParts = wholeQueryString.split("=");
  let query = queryParts[queryParts.length - 1];
  return({
    searches : state.entities.searches,
    products : state.entities.products,
    shops : state.entities.shops,
    tags : state.entities.tags,
    filters : state.entities.filters,
    categories : state.entities.categories,
    query : query,
    loggedIn : Boolean(state.session.currentUser),
    pageLoaded : state.pageLoaded
  })
}

const mdp = dispatch => ({
  fetchSearchMain : (query) => dispatch(fetchSearchMain(query)),
  createSearch : (query) => dispatch(createSearch(query))
})

export default withRouter(connect(msp, mdp)(SearchResult));