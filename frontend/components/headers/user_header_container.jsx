import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserHeader from './user_header';

import {logoutUser} from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    signoutUser: () => dispatch(logoutUser()),
    fetchPopularTerms: () => dispatch(fetchPopularTerms()),
});


export default withRouter(connect(msp, mdp)(UserHeader));


