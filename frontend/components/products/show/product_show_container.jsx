import React from 'react';
import { connect } from 'react-redux';
import ProductShow from './product_show';

const msp = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.prodId]
});


export default connect(msp, null)(ProductShow);