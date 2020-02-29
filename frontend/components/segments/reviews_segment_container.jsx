import { connect } from 'react-redux';
import ReviewSegment from './reviews_segment';
// import { fetchHappyReviews } from '../../actions/positive_reviews_actions';
import { fetchHappyReviews } from '../../actions/newest_reviews_actions';

const msp = (state) => ({
  // products: state.entities.products.happyProducts,
  // products : state.entities.positiveReviews.products,
  // reviews: state.entities.reviews.happyReviews,
  // reviews : state.entities.positiveReviews.reviews,
  // users: state.entities.users.happyUsers,
  // users : state.entities.positiveReviews.users,
  // shops: state.entities.shops,
  products: state.entities.products,
  reviews: state.entities.reviews,
  users: state.entities.users,
  loggedIn: Boolean(state.session.currentUser),
});

const mdp = (dispatch) => ({
  fetchHappyReviews: () => dispatch(fetchHappyReviews())
});



export default connect(msp, mdp)(ReviewSegment);