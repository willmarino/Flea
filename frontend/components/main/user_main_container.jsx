import { connect } from 'react-redux';
import UserMain from './user_main';

// import { fetchIndex } from '../../actions/product_actions';
// import { fetchUserCart } from '../../actions/users_actions';

const msp = (state) => ({
  // products: state.entities.products.forIndex,
  // user: state.session.currentUser
})

const mdp = (dispatch) => ({
  // fetchIndex: () => dispatch(fetchIndex()),
  // fetchUserCart: (userId) => dispatch(fetchUserCart(userId))
})

export default connect(msp, mdp)(UserMain);