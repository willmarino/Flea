import * as UserApi from '../util/user_util';

export const SIGN_UP_USER = "SIGN_UP_USER";


const receiveUser = (user) => ({
  type: SIGN_UP_USER,
  user
});

export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(user => dispatch(receiveUser(user)))
);

