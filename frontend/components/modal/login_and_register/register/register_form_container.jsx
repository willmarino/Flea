import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { signupUser } from '../../../../actions/users_actions';
import { openModal } from '../../../../actions/modal_actions';

const msp = (state) => ({
  errors: state.errors.userErrors
});

const mdp = (dispatch) => ({
  signupUser: (user) => dispatch(signupUser(user)),
  openModal: (status) => dispatch(openModal(status))
});

export default connect(msp, mdp)(RegisterForm);