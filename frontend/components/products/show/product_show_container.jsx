import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import {createReview} from '../../../actions/review_actions';
import { fetchProductShow } from '../../../actions/product_actions';
import ProductShow from './product_show';
// we need product, the shop that sells it, the reviews for the product, and the reviews for the shop
const msp = (state, ownProps) => {
    let curProdId = ownProps.match.params.prodId;
    return({
        shopReviewProducts: state.entities.products.shopReviewProducts,
        product: state.entities.products[curProdId],
        shop: state.entities.shops.byProduct,
        productReviews: state.entities.reviews.byProduct,
        productReviewAuthors : state.entities.users.productReviewAuthors,
        shopReviewAuthors : state.entities.users.shopReviewAuthors,
        shopReviews: state.entities.reviews.byShop,
        curProdId: curProdId,
        loggedIn: Boolean(state.session.currentUser),
        user: state.session.currentUser
    })
}

const mdp = dispatch => ({
    fetchProductShow: (id) => dispatch(fetchProductShow(id))
    // createReview: (review) => dispatch(createReview(review))
});


export default connect(msp, mdp)(ProductShow);