import { connect } from 'react-redux';
import ReviewSegment from './reviews_segment';
import { fetchHappyReviews } from '../../actions/newest_reviews_actions';

const msp = (state) => ({
  products: state.entities.products,
  reviews: state.entities.reviews,
  users: state.entities.users,
  loggedIn: Boolean(state.session.currentUser),
});

const mdp = (dispatch) => ({
  fetchHappyReviews: () => dispatch(fetchHappyReviews())
});



export default connect(msp, mdp)(ReviewSegment);