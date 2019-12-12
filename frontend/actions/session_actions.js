import * as SessionApi from '../util/session_util';

export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => ({
  type: LOG_IN_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const removeUser = () => ({
  type: LOG_OUT_USER
});

export const loginUser = user => dispatch => (
  SessionApi.loginUser(user)
    .then(user => dispatch(receiveUser(user))),
    errors => dispatch(receiveErrors(errors.responseJSON))
);

export const logoutUser = () => dispatch => (
  SessionApi.logoutUser()
    .then(() => dispatch(removeUser()))
);