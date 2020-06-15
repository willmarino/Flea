import { RECEIVE_ERRORS, LOG_IN_USER } from "../actions/session_actions";
import { SIGN_UP_USER } from "../actions/users_actions";


const SessionErrorsReducer = (state=[], action) => {
    if(action.type === RECEIVE_ERRORS) debugger;
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors;
        case SIGN_UP_USER:
            return [];
        case LOG_IN_USER:
            return [];
        default:
            return state;
    }
};

export default SessionErrorsReducer;