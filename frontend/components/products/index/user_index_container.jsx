import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchIndex } from '../../../actions/product_actions';
import { fetchUserCart } from '../../../actions/users_actions';

const msp = (state, ownProps) => {
  debugger;
  return({
    products : state.entities.products,
    index : state.entities.products.index,
    categories : state.entities.products.categories,
    happyProducts : state.entities.products.happyProducts,
    cart : state.entities.carts['currentCart'],
    user : state.session.currentUser
  })
}

const mdp = (dispatch) => ({
  fetchIndex : () => dispatch(fetchIndex()),
  fetchUserCart : (userId) => dispatch(fetchUserCart(userId))

})

export default connect(msp, mdp)(UserIndex)