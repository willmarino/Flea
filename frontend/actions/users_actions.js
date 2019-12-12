import * as UserApi from '../util/user_util';
import * as SessionApi from '../util/session_util';
import {loginUser} from './session_actions';

export const SIGN_UP_USER = "SIGN_UP_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveUser = (user) => ({
  type: SIGN_UP_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(user => dispatch(receiveUser(user))), errors => dispatch(receiveErrors(errors.responseJSON))

);

export const fetchUsers = () => dispatch => (
  UserApi.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);
