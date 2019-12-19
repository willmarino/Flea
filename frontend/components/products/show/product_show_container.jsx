import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import {fetchShops} from '../../../actions/shop_actions';
import {createCart} from '../../../actions/cart_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.prodId],
    shop: state.entities.shops[state.entities.products[ownProps.match.params.prodId].shop_id],
    reviews: state.entities.reviews,
    products: state.entities.products
});

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchShops: () => dispatch(fetchShops()),
    createCart: (cart) => dispatch(createCart(cart))
});


export default connect(msp, mdp)(ProductShow);