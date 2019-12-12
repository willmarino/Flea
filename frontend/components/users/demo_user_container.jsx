import {connect} from 'react-redux';
import DemoUser from './demo_user';
import { loginUser } from '../../actions/session_actions';
import {receiveUser} from '../../actions/users_actions';

const msp = (state) => ({
  demoUser: {username: "demouser", password: "password"}
});

const mdp = dispatch => ({
  loginDemoUser: (user) => dispatch(loginUser(user)),
  sendUserToState: (user) => dispatch(receiveUser(user))
});

export default connect(msp, mdp)(DemoUser);