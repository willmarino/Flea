import { connect } from 'react-redux';
import SearchResult from './search_result';
// import { fetchSearchMain } from '../../actions/search_actions';
import { fetchSearchMain } from '../../actions/newest_search_actions';

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
    query : query,
    loggedIn : Boolean(state.session.currentUser),
    pageLoaded : state.pageLoaded
    // searchProducts : state.search.searchProducts,
    // recommendedTags : state.search.recommendedTags,
    // filters : state.search.filters,
    // categories : state.search.productCategories,
    // shops : state.entities.shops.byProducts.byProducts,
  })
}

const mdp = dispatch => ({
  fetchSearchMain : (query) => dispatch(fetchSearchMain(query))
})

export default connect(msp, mdp)(SearchResult);