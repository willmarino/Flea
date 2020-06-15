import { connect } from 'react-redux';

import UserHome from './user_home';

import { fetchIndex } from '../../../../../actions/newest_product_actions';
import { fetchSuggestedTags } from '../../../../../actions/newest_tag_actions';
import { fetchRecentlyViewedProducts } from '../../../../../actions/newest_product_actions';

const msp = (state) => ({
  products : state.entities.products,
  categories : state.entities.categories,
  loggedIn : Boolean(state.session.currentUser),
  tags : state.entities.tags,
  user : state.session.currentUser
})

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchSuggestedTags : () => dispatch(fetchSuggestedTags()),
  fetchRecentlyViewedProducts : (limit) => dispatch(fetchRecentlyViewedProducts(limit))
})

export default connect(msp, mdp)(UserHome)