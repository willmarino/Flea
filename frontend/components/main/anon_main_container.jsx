import { connect } from 'react-redux';
import AnonMain from './anon_main';

import { fetchProducts } from '../../actions/product_actions';
import { fetchShops } from '../../actions/shop_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchIndex } from '../../actions/product_actions';
import { generateCats } from '../../actions/current_categories_actions';

import { fetchHappyReviews } from '../../actions/review_actions';

const msp = (state) => ({
  products: state.entities.products
})

const mdp = (dispatch) => ({
  // fetchUsers: () => dispatch(fetchUsers()),
  // fetchReviews: () => dispatch(fetchReviews()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops()),
  fetchHappyReviews: () => dispatch(fetchHappyReviews()),
  generateCats: () => dispatch(generateCats()),
  fetchIndex: () => dispatch(fetchIndex())
})

export default connect(msp, mdp)(AnonMain);