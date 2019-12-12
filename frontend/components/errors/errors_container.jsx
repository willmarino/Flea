import React from 'react';
import {connect} from 'react-redux';

const msp = state => ({
  userErrors: state.errors.userErrors,
  sessionErrors: state.errors.sessionErrors
});