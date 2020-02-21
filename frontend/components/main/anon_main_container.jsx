import { connect } from 'react-redux';
import AnonMain from './anon_main';
// import { fetchAllCategories } from '../../actions/category_actions';

const msp = (state) => ({
  products: state.entities.products.forIndex,
  // categories: state.newcategories
})

const mdp = (dispatch) => ({
  // fetchAllCategories : () => dispatch(fetchAllCategories())
})

export default connect(msp, mdp)(AnonMain);