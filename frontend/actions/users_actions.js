import * as UserApi from '../util/user_util';
import * as SessionApi from '../util/session_util';
import {loginUser} from './session_actions';

export const SIGN_UP_USER = "SIGN_UP_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const RECENTLY_VIEWED_PRODUCTS = "RECENTLY_VIEWED_PRODUCTS";


export const receiveUser = (user) => ({
  type: SIGN_UP_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const recentlyViewedProducts = (products) => ({
  type: RECENTLY_VIEWED_PRODUCTS,
  products
});

export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(
      user => dispatch(receiveUser(user)), 
      errors => dispatch(receiveErrors(errors.responseJSON))
    )

);

export const fetchUsers = () => dispatch => (
  UserApi.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = (user) => dispatch => (
  UserApi.fetchUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchRecentlyViewed = (id) => (
  UserApi.fetchRecentlyViewed(id)
    .then(products => dispatch(recentlyViewedProducts(products)))
);