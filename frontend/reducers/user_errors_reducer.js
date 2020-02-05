import { RECEIVE_ERRORS } from "../actions/users_actions";


const UserErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return [];
    }
};

export default UserErrorsReducer;