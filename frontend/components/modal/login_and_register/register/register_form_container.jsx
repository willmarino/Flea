import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { signupUser } from '../../../../actions/users_actions';

const msp = (state) => ({
  errors: state.errors.userErrors
});

const mdp = (dispatch) => ({
  signupUser: (user) => dispatch(signupUser(user))
});

export default connect(msp, mdp)(RegisterForm);