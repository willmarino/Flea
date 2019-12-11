// if a user tries to login or signup incorrectly the app should tell them why,
// if user is found in controller logic, then we will send


export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
  });