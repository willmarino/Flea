import * as UserApi from '../util/user_util';

export const SIGN_UP_USER = "SIGN_UP_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";


const receiveUser = (user) => ({
  type: SIGN_UP_USER,
  user
});

const receiveUsers = (users) => ({
  type: SIGN_UP_USER,
  users
});

export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserApi.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);
