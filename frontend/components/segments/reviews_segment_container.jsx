import { connect } from 'react-redux';
import ReviewSegment from './reviews_segment';
import {fetchReviews} from '../../actions/review_actions';

const msp = (state) => ({
  products: state.entities.products,
  reviews: state.entities.reviews
});

const mdp = (dispatch) => ({
  fetchReviews: () => dispatch(fetchReviews())
});



export default connect(msp, mdp)(ReviewSegment);