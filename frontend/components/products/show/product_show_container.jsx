import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import {fetchProducts} from '../../../actions/product_actions';
import {fetchShops} from '../../../actions/shop_actions';
// import {createCart} from '../../../actions/cart_actions';
import {createReview} from '../../../actions/review_actions';
import {fetchReviews, fetchReviewsByProduct} from'../../../actions/review_actions';
import {fetchUsers} from '../../../actions/users_actions';
import {fetchShop} from '../../../actions/shop_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => {
    let curProdId = ownProps.match.params.prodId;
    let product = state.entities.products[ownProps.match.params.prodId];
    let shop = state.entities.shops[product.shop_id];
    let productReviews = Object.values(state.entities.reviews).filter(r => r.item_id === product.id);
    let shopReviews = Object.values(state.entities.reviews).filter(r => r.shop_id === shop.id)
    return({
        product: product,
        shop: shop,
        // reviews: reviews,
        productReviews: productReviews,
        shopReviews: shopReviews,
        curProdId: curProdId,
        loggedIn: Boolean(state.session.currentUser),
        user: state.session.currentUser,
        users: state.entities.users
    })
}

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchShop: (id) => dispatch(fetchShop(id)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchReviewsByProduct: (id) => dispatch(fetchReviewsByProduct(id)),
    fetchReviewsByShop: (id) => dispatch(fetchReviewsByShop(id)),
    createReview: (review) => dispatch(createReview(review)),
    fetchUsers: () => dispatch(fetchUsers())
    // createCart: (cart) => dispatch(createCart(cart))
});


export default connect(msp, mdp)(ProductShow);