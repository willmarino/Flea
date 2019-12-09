import {
  LOG_IN_USER,
  LOG_OUT_USER
} from '../actions/session_actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOG_IN_USER:
      return Object.assign({}, state, {currentUser: action.user});
    case LOG_OUT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default SessionReducer;