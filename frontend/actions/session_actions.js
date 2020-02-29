import * as SessionApi from '../util/session_util';

import { receiveCart } from '../actions/newest_cart_actions';
import { receiveCartItems } from '../actions/newest_cartitem_actions';

export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => ({
  type: LOG_IN_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const removeUser = () => ({
  type: LOG_OUT_USER
});

export const loginUser = user => dispatch => (
  SessionApi.loginUser(user)
    .then(lo => {
      dispatch(receiveUser(lo.login_obj.user))
      dispatch(receiveCart(lo.login_obj.cart))
      dispatch(receiveCartItems(lo.login_obj.cart_items))},
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logoutUser = () => dispatch => (
  SessionApi.logoutUser()
    .then(() => dispatch(removeUser()))
);