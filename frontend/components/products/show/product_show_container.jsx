import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import {fetchShops} from '../../../actions/shop_actions';
import {createCart} from '../../../actions/';
import ProductShow from './product_show';

const msp = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.prodId];
    return{
        product: product,
        shop: state.entities.shops[product.shop_id]
    };

};

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchShops: () => dispatch(fetchShops()),
    createCart: (cart) => dispatch(createCart(cart))
});


export default connect(msp, mdp)(ProductShow);