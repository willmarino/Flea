import * as UserApi from '../util/user_util';

export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

const receiveUser = (user) => ({
  type: LOG_IN_USER,
  user
});

const removeUser = (user) => ({
  type: LOG_OUT_USER,
  user
});

export const loginUser = (user) => dispatch => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user}
  })
);

export const logoutUser = (user) => dispatch => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);