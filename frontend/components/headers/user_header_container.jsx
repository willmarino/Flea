// if we are rendering this component, there should be a user logged in currently
// if there is a user logged in, we should have a currentUser in the state
// we will need to render that user's info, at least it would be good to
// so, we will use a container to wrap the user header, which will pass the current user from state to props

// we will also need to map in a sign out button
// we will import this from the session actions file and map it to props with dispatch

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserHeader from './user_header';

import {logoutUser} from '../../actions/session_actions';
// import { fetchPopularTerms } from '../../actions/search_actions';

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    signoutUser: () => dispatch(logoutUser()),
    fetchPopularTerms: () => dispatch(fetchPopularTerms()),
});


export default withRouter(connect(msp, mdp)(UserHeader));


