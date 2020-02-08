import { connect } from 'react-redux';
import UserMain from './user_main';

import { fetchProducts } from '../../actions/product_actions';
import { fetchShops } from '../../actions/shop_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchIndex } from '../../actions/product_actions';
import { generateCats } from '../../actions/current_categories_actions';
import { fetchUserCart } from '../../actions/users_actions';

import { fetchHappyReviews } from '../../actions/review_actions';

const msp = (state) => ({
  products: state.entities.products,
  user: state.session.currentUser
})

const mdp = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops()),
  // fetchReviews: () => dispatch(fetchReviews()),
  fetchHappyReviews: () => dispatch(fetchHappyReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  generateCats: () => dispatch(generateCats()),
  fetchIndex: () => dispatch(fetchIndex()),
  fetchUserCart: (userId) => dispatch(fetchUserCart(userId))
})

export default connect(msp, mdp)(UserMain);