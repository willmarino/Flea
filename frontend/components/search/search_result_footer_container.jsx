import { connect } from 'react-redux';
import SearchResultFooter from './search_result_footer';
// import { fetchSearchMainFooter } from '../../actions/search_actions';
import { fetchSearchMainFooter } from '../../actions/newest_search_actions';

const msp = (state) => ({
  // recentlyViewedProducts : state.search.recentlyViewedProducts,
  // associatedProducts : state.search.associatedWithRecentProducts,
  // shops : state.search.relatedShops,
  products : state.entities.products,
  shops : state.entities.shops,
  loggedIn : Boolean(state.session.currentUser)
})

const mdp = (dispatch) => ({
  fetchSearchMainFooter : () => dispatch(fetchSearchMainFooter())
})

export default connect(msp, mdp)(SearchResultFooter);

