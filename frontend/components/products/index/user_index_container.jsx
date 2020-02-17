import { connect } from 'react-redux';
import UserIndex from './user_index';

import { fetchIndex } from '../../../actions/products/products_by_index_actions';
import { fetchUserCart } from '../../../actions/users_actions';

const msp = (state, ownProps) => {
  return({
    products : state.entities.products.forIndex,
    categories : state.entities.products.categories,
    cartId : state.entities.carts,
    user : state.session.currentUser
  })
}

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchUserCart : (userId) => dispatch(fetchUserCart(userId))

})

export default connect(msp, mdp)(UserIndex)