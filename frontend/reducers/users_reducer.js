import {
  SIGN_UP_USER, RECEIVE_USERS
} from '../actions/users_actions';

// individual items sent to reducers are not nested under a key of id
// they are set in the reducer

// sets of items should come in to the reducer as an object full of k, v pairs,
// with k being id, and v being the item object


const UsersReducer = (state={}, action) => {
  // debugger;
  Object.freeze(state);
  switch(action.type){
    case SIGN_UP_USER:
      return Object.assign({}, state, {[action.user.id] : action.user});
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};

export default UsersReducer;