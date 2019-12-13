import React from 'react'
import { connect } from 'react-redux';
import UserLogin from './user_login';
import { loginUser, logoutUser } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';

const msp = state => ({
  user: {username: "", password: ""},
  formType: 'login',
  errors: state.errors.sessionErrors
});

const mdp = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),

  signupForm: () => dispatch(openModal('sign up')),
  closeModal: () => dispatch(closeModal()),
  sendErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(msp, mdp)(UserLogin);