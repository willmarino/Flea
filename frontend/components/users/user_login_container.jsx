import { connect } from 'react-redux';
import UserLogin from './user_login';
import { loginUser, logoutUser } from '../../actions/session_actions';

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  loginUser: (user) => dispatch(loginUser),
  logoutUser: () => dispatch(logoutUser)
});

export default connect(msp, mdp)(UserLogin);