import { connect } from 'react-redux';
import UserMain from './user_main';

// import { fetchIndex } from '../../actions/product_actions';
// import { fetchUserCart } from '../../actions/users_actions';

const msp = (state, ownProps) => {
  debugger;
  return({
    curPath : ownProps.match.path
  })
}

const mdp = (dispatch) => ({
  // fetchIndex: () => dispatch(fetchIndex()),
  // fetchUserCart: (userId) => dispatch(fetchUserCart(userId))
})

export default connect(msp, mdp)(UserMain);