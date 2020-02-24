import { connect } from 'react-redux';
import SearchResultFooter from './search_result_footer';
import { fetchSearchMainFooter } from '../../actions/search_actions';

const msp = (state) => ({
  recentlyViewedProducts : state.search.recentlyViewedProducts,
  associatedProducts : state.search.associatedWithRecentProducts,
  shops : state.search.relatedShops,
  loggedIn : Boolean(state.session.currentUser)
})

const mdp = (dispatch) => ({
  fetchSearchMainFooter : () => dispatch(fetchSearchMainFooter())
})

export default connect(msp, mdp)(SearchResultFooter);

