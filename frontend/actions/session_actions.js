import * as SessionApi from '../util/user_util';

export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

const receiveUser = (user) => ({
  type: LOG_IN_USER,
  user
});

const removeUser = () => ({
  type: LOG_OUT_USER
});

export const loginUser = user => dispatch => (
  SessionApi.loginUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const logoutUser = () => dispatch => (
  SessionApi.logoutUser()
    .then(() => dispatch(removeUser()))
);