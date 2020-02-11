import { connect } from 'react-redux';
import AnonIndex from './anon_index';
import { fetchIndex } from '../../../actions/product_actions';
import { fetchHappyReviews } from '../../../actions/review_actions';

const msp = (state, ownProps) => ({
  products : state.entities.products,
  index : state.entities.products.index,
  categories : state.entities.products.categories,
  happyProducts : state.entities.products.happyProducts,
  happyReviews : state.entities.reviews.happyReviews
})

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchHappyReviews : () => dispatch(fetchHappyReviews())
})

export default connect(msp, mdp)(AnonIndex)