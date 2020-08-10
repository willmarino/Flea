import {
  SIGN_UP_USER,
  RECEIVE_USERS,
  RECEIVE_USER,
  RECEIVE_HAPPY_USER_IDS,
  SIMPLE_RECEIVE_USER
} from '../actions/users_actions';
import { LOG_IN_USER } from '../actions/session_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case SIMPLE_RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id] : action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id] : action.user });
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
    case RECEIVE_HAPPY_USER_IDS:
      return Object.assign( {}, state, { happyUserIds : action.ids });
    default:
      return state;
  }
};

export default UsersReducer;