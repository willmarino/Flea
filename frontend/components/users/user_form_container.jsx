import { connect } from 'react-redux';
import UserForm from './user_form';
import { signupUser } from '../../actions/users_actions';
import { loginUser } from '../../actions/session_actions';

const msp = state => ({
  user: {username: "", password: "", email: "", location: "", description: ""}
});

const mdp = dispatch => ({
  signupUser: (user) => dispatch(signupUser(user)),
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(UserForm);