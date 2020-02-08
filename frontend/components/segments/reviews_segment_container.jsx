import { connect } from 'react-redux';
import ReviewSegment from './reviews_segment';
import { fetchHappyReviews } from '../../actions/review_actions';

const msp = (state) => ({
  products: state.entities.products.happyProducts,
  reviews: state.entities.reviews.happyReviews,
  users: state.entities.users.happyUsers,
  shops: state.entities.shops,
  loggedIn: Boolean(state.session.currentUser),
});

const mdp = (dispatch) => ({
  fetchHappyReviews: () => dispatch(fetchHappyReviews())
});



export default connect(msp, mdp)(ReviewSegment);