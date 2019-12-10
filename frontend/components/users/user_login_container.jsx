import React from 'react'
import { connect } from 'react-redux';
import UserLogin from './user_login';
import { loginUser, logoutUser } from '../../actions/session_actions';

const msp = state => ({
  user: {username: "", password: ""},
  formType: 'login'
});

const mdp = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  signupForm: (
    <button onClick={() => dispatch(openModal('sign up'))}>Sign Up</button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(UserLogin);