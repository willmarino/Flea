import React from 'react';
import {connect} from 'react-redux';
import SessionErrors from './session_errors';

const msp = state => ({
  sessionErrors: state.errors.sessionErrors
});

export default connect(msp, null)(SessionErrors);
