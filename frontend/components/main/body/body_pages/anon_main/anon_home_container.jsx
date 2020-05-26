import { connect } from 'react-redux';
import AnonHome from './anon_home';
import { fetchIndex } from '../../../actions/newest_product_actions';

const msp = (state) => ({
  products : state.entities.products,
  categories : state.entities.categories
})

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex())
})

export default connect(msp, mdp)(AnonHome)