import { connect } from 'react-redux';
import AnonMain from './anon_main';


import { fetchIndex } from '../../actions/product_actions';
// import { fetchHappyReviews } from '../../actions/review_actions';

const msp = (state) => ({
  products: state.entities.products.forIndex
})

const mdp = (dispatch) => ({
  // fetchHappyReviews: () => dispatch(fetchHappyReviews()),
  // fetchIndex: () => dispatch(fetchIndex())
})

export default connect(msp, mdp)(AnonMain);