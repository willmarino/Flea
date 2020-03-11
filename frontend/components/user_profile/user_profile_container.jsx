import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchFavorites, fetchUserById } from '../../actions/users_actions';

const msp = (state, ownProps) => ({
  users : state.entities.users,
  products : state.entities.products,
  shops : state.entities.shops,
  product_favorites : state.entities.product_favorites,
  shop_favorites : state.entities.shop_favorites,
  currentUser : state.session.currentUser,
  curId : ownProps.match.params.userId
});

const mdp = (dispatch) => ({
  fetchFavorites: (id) => dispatch(fetchFavorites(id)),
  fetchUserById: (id) => dispatch(fetchUserById(id))
});

export default connect(msp, mdp)(UserProfile);