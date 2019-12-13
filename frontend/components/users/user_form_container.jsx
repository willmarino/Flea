import React from 'react';
import { connect } from 'react-redux';
import UserForm from './user_form';
import { signupUser } from '../../actions/users_actions';
import { loginUser } from '../../actions/session_actions';
import {
  openModal, closeModal, OPEN_MODAL, CLOSE_MODAL
} from '../../actions/modal_actions';
import {receiveErrors} from '../../actions/users_actions';

const msp = state => ({
  user: {username: "", password: "", email: ""},
  formtype: 'sign up',
  errors: state.errors.userErrors
});

const mdp = dispatch => ({
  signupUser: (user) => dispatch(signupUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  loginForm: (
    <button onClick={() => dispatch(openModal('login'))}>Login</button>
  ),
  closeModal: () => dispatch(closeModal()),
  sendErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(msp, mdp)(UserForm);