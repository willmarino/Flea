import React from 'react';
import {connect} from 'react-redux';
import UserErrors from './user_errors';

const msp = state => ({
  userErrors: state.errors.userErrors,
});



export default connect(msp, null)(UserErrors);