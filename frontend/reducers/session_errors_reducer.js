import { RECEIVE_ERRORS } from "../actions/session_actions";


const SessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;