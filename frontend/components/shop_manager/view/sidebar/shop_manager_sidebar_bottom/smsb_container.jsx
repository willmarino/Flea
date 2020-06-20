import { connect } from 'react-redux';
import SMSB from './smsb'
import { logoutUser } from '../../../../../actions/session_actions';

const msp = state => ({
  user : state.session.currentUser
})

const mdp = dispatch => ({
  logoutUser : () => dispatch(logoutUser())
})

export default connect(msp, mdp)(SMSB);