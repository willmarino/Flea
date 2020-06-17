import * as UserApi from '../util/user_util';
import * as SessionApi from '../util/session_util';

import { loginUser } from './session_actions';
import { receiveCart } from '../actions/newest_cart_actions';

// fetch favorites actions
import { receiveShops } from '../actions/newest_shop_actions';
import { receiveProducts } from '../actions/newest_product_actions';
import { receiveShopFavorites, receiveSFIdsProfile } from '../actions/shop_favorite_actions';
import { receiveProductFavorites, receivePFIdsProfile } from '../actions/product_favorite_actions';

export const SIGN_UP_USER = "SIGN_UP_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const RECENTLY_VIEWED_PRODUCTS = "RECENTLY_VIEWED_PRODUCTS";
export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";
export const RECEIVE_HAPPY_USER_IDS = "RECEIVE_HAPPY_USER_IDS";

export const receiveUser = (user) => ({
  type: SIGN_UP_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveHappyUserIds = (ids) => ({
  type: RECEIVE_HAPPY_USER_IDS,
  ids
})

const recentlyViewedProducts = (products) => ({
  type: RECENTLY_VIEWED_PRODUCTS,
  products
});

export const receiveAuthors = (users) => ({
  type: RECEIVE_AUTHORS,
  users
});

export const receiveUserSimple = (user) => ({
  type: RECEIVE_USER,
  user
})


export const signupUser = (user) => dispatch => (
  UserApi.createUser(user)
    .then(
      user => dispatch(receiveUser(user)), 
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const signupUser2 = (user) => (dispatch) => (
  UserApi.createUser(user)
    .then(res => {
      dispatch(receiveUser(res.user));
      dispatch(receiveCart(res.cart));
    },
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

export const fetchRecentlyViewed = (id) => dispatch => (
  UserApi.fetchRecentlyViewed(id)
    .then(products => dispatch(recentlyViewedProducts(products)))
);

export const fetchUserCart = (userId) => dispatch => (
  UserApi.fetchUserCart(userId)
    .then(cart => dispatch(receiveCart(cart)))
);

export const fetchUserById = (id) => (dispatch) => (
  UserApi.fetchUserById(id)
    .then(res => {
      // dispatch(receiveUserSimple(res.user))
      dispatch(receiveUser(res.user))
    })
)

export const fetchFavorites = (id) => (dispatch) => (
  UserApi.fetchFavorites(id)
    .then(res => {
      dispatch(receiveProducts(res.products));
      dispatch(receiveShops(res.shops));
      dispatch(receiveProductFavorites(res.product_favorites));
      dispatch(receivePFIdsProfile(res.product_favorite_ids));
      dispatch(receiveShopFavorites(res.shop_favorites));
      dispatch(receiveSFIdsProfile(res.shop_favorite_ids));
    })
)