import {connect} from 'react-redux';
import DemoUser from './demo_user';
import { loginUser } from '../../actions/session_actions';

const msp = (state) => ({
  demoUser: {username: "demouser", password: "password"}
});

const mdp = dispatch => ({
  loginDemoUser: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(DemoUser);