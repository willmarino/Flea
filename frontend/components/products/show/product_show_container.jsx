import React from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from '../../../actions/product_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.prodId]
});

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
});


export default connect(msp, null)(ProductShow);