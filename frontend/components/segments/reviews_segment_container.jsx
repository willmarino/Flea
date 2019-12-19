import { connect } from 'react-redux';
import ReviewSegment from './reviews_segment';
import {fetchReviews} from '../../actions/review_actions';
import {fetchShops} from '../../actions/shop_actions';

const msp = (state) => ({
  products: state.entities.products,
  reviews: state.entities.reviews,
  shops: state.entities.shops,
  loggedIn: Boolean(state.session.currentUser)
});

const mdp = (dispatch) => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchShops: () => dispatch(fetchShops())
});



export default connect(msp, mdp)(ReviewSegment);