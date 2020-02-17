import * as UserApi from '../util/user_util';
import * as SessionApi from '../util/session_util';

import { loginUser } from './session_actions';
import { createCart } from '../util/cart_util';
import { receiveCart } from './cart_actions';

export const SIGN_UP_USER = "SIGN_UP_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const RECENTLY_VIEWED_PRODUCTS = "RECENTLY_VIEWED_PRODUCTS";
export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";

// export const RECEIVE_PRODUCT_REVIEW_AUTHORS = "RECEIVE_PRODUCT_REVIEW_AUTHORS";
// export const RECEIVE_SHOP_REVIEW_AUTHORS = "RECEIVE_SHOP_REVIEW_AUTHORS";

// export const RECEIVE_SHOP_OWNER = "RECEIVE_SHOP_OWNER";


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

export const receiveAuthors = (users) => ({
  type: RECEIVE_AUTHORS,
  users
})

// export const receiveProductReviewAuthors = (users) => ({
//   type: RECEIVE_PRODUCT_REVIEW_AUTHORS,
//   users
// })

// export const receiveShopReviewAuthors = (users) => ({
//   type: RECEIVE_SHOP_REVIEW_AUTHORS,
//   users
// })

// export const receiveShopOwner = (user) => ({
//   type: RECEIVE_SHOP_OWNER,
//   user
// })

export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(
      user => dispatch(receiveUser(user)), 
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const signupUser2 = (user) => (dispatch) => (
  UserApi.createUser(user)
    .then(user => {
      dispatch(receiveUser(user));
      return createCart({user_id: user.id});
    }).then(cart => dispatch(receiveCart(cart))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const fetchUsers = () => dispatch => (
  UserApi.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = (user) => dispatch => (
  UserApi.fetchUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchRecentlyViewed = (id) => dispatch => (
  UserApi.fetchRecentlyViewed(id)
    .then(products => dispatch(recentlyViewedProducts(products)))
);

export const fetchUserCart = (userId) => dispatch => (
  UserApi.fetchUserCart(userId)
    .then(cart => dispatch(receiveCart(cart)))
);
