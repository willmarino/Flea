import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser } from '../../../../../actions/session_actions';
import { openModal } from '../../../../../actions/modal_actions';

const msp = (state) => ({
  errors: state.errors.sessionErrors
})

const mdp = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  openModal: (status) => dispatch(openModal(status))
})

export default connect(msp, mdp)(LoginForm);