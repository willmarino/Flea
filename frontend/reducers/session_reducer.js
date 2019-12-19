import {
  LOG_IN_USER,
  LOG_OUT_USER
} from '../actions/session_actions';
import {SIGN_UP_USER} from '../actions/users_actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SIGN_UP_USER:
      return Object.assign({}, state, {currentUser: action.user.id});
    case LOG_IN_USER:
      return Object.assign({}, state, { currentUser: action.user.id});
    case LOG_OUT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default SessionReducer;