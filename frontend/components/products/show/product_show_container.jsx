import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import {fetchProducts} from '../../../actions/product_actions';
import {fetchShops} from '../../../actions/shop_actions';
import {createCart} from '../../../actions/cart_actions';
import {fetchReviews} from'../../../actions/review_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.prodId],
    // shop: state.entities.shops[state.entities.products[ownProps.match.params.prodId].shop_id],
    shops: state.entities.shops,
    reviews: state.entities.reviews,
    products: state.entities.products
});

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchShops: () => dispatch(fetchShops()),
    fetchReviews: () => dispatch(fetchReviews())
    // createCart: (cart) => dispatch(createCart(cart))
});


export default connect(msp, mdp)(ProductShow);