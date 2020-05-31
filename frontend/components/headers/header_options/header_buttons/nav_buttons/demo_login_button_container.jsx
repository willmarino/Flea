import { connect } from 'react-redux';
import DemoLoginButton from './demo_login_button';
import { loginUser } from '../../../../../actions/session_actions';

const mdp = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mdp)(DemoLoginButton);


