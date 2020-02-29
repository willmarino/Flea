import {
  SIGN_UP_USER,
  RECEIVE_USERS,
  RECEIVE_HAPPY_USER_IDS
  // RECEIVE_PRODUCT_REVIEW_AUTHORS,
  // RECEIVE_SHOP_REVIEW_AUTHORS,
  // RECEIVE_SHOP_OWNER
} from '../actions/users_actions';
import { LOG_IN_USER } from '../actions/session_actions';
// import { HAPPY_USERS } from '../actions/review_actions';
// import { HAPPY_USERS } from '../actions/positive_reviews_actions';

import { RECEIVE_PRODUCT_REVIEW_AUTHORS, RECEIVE_SHOP_REVIEW_AUTHORS } from '../actions/reviews/reviews_by_user_actions';
import { RECEIVE_SHOP_OWNER } from '../actions/users/users_by_shop_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    // case RECEIVE_AUTHORS:
    //   // return Object.assign({}, state, { reviewAuthors : action.users })
    //   for(let i = 0; i < action.users.length; i++){
    //     let user = action.users[i];
    //     newState = Object.assign({}, state, { [user.id] : user })
    //   }
    //   return newState;
    case RECEIVE_PRODUCT_REVIEW_AUTHORS:
      return Object.assign({}, state, { productReviewAuthors : action.users })
    case RECEIVE_SHOP_REVIEW_AUTHORS:
      return Object.assign({}, state, { shopReviewAuthors : action.users })
    case RECEIVE_SHOP_OWNER:
      return Object.assign({}, state, { shopOwner : action.user})
    // case HAPPY_USERS:
    //   return Object.assign({}, state, { happyUsers : action.users })
    case LOG_IN_USER:
      return Object.assign({}, state, { [action.user.id] : action.user });
    case SIGN_UP_USER:
      return Object.assign({}, state, { [action.user.id] : action.user });
    case RECEIVE_USERS:
      for(let i = 0; i < action.users.length; i++){
        let u = action.users[i];
        newState[u.id] = u;
      }
      return Object.assign({}, state, newState);
      // return Object.assign({}, state, action.users);
    case RECEIVE_HAPPY_USER_IDS:
      return Object.assign( {}, state, { happyUserIds : action.ids });
    default:
      return state;
  }
};

export default UsersReducer;