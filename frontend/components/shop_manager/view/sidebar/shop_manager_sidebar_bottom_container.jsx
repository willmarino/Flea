import { connect } from 'react-redux';
import ShopManagerSidebarBottomContainer from './shop_manager_sidebar_bottom'
import { logoutUser } from '../../../../actions/session_actions';

const msp = state => ({
  currentUser : state.session.currentUser
})

const mdp = dispatch => ({
  logoutUser : () => dispatch(logoutUser())
})

export default connect(msp, mdp)(ShopManagerSidebarBottomContainer);