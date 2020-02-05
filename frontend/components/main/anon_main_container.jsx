import { connect } from 'react-redux';
import AnonMain from './anon_main';

import { fetchProducts } from '../../actions/product_actions';
import { fetchShops } from '../../actions/shop_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/users_actions';
import { generateCats } from '../../actions/current_categories_actions';

const msp = (state) => ({
  products: state.entities.products
})

const mdp = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops()),
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  generateCats: () => dispatch(generateCats())
})

export default connect(msp, mdp)(AnonMain);