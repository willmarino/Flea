// if we are rendering this component, there should be a user logged in currently
// if there is a user logged in, we should have a currentUser in the state
// we will need to render that user's info, at least it would be good to
// so, we will use a container to wrap the user header, which will pass the current user from state to props

// we will also need to map in a sign out button
// we will import this from the session actions file and map it to props with dispatch

import { connect } from 'react-redux';
import UserHeader from './user_header';
import {logoutUser} from '../../actions/session_actions';
import {fetchProducts} from '../../actions/product_actions';
import {fetchShops} from '../../actions/shop_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mdp = dispatch => ({
    signoutUser: () => dispatch(logoutUser()),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchShops: () => dispatch(fetchShops())
});


export default connect(msp, mdp)(UserHeader);


