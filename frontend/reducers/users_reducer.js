import {
  SIGN_UP_USER
} from '../actions/users_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case SIGN_UP_USER:
      return Object.assign({}, state, {[action.user.id] : action.user});
    default:
      return state;
  }
};

export default UsersReducer;