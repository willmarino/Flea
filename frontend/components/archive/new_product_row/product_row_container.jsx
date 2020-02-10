import {connect} from 'react-redux';

import ProductRow from './product_row';

import { fetchRecentlyViewed } from '../../../actions/users_actions';
import { productsByCategory } from '../../../actions/product_actions';

const msp = (state, ownProps) => ({
    categories: state.categories,
    products: state.entities.products,
    shops: state.entities.shops,
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    type: ownProps.type
});

const mdp = (dispatch) => ({
    fetchRecentlyViewed: (id) => dispatch(fetchRecentlyViewed(id)),
    productsByCategory: (categoryObj) => dispatch(productsByCategory(categoryObj))
});

export default connect(msp, mdp)(ProductRow);