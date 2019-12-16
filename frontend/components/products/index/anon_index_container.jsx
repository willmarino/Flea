import React from 'react';
import Index from './index';
import { fetchProducts } from '../../../actions/product_actions';
import { connect } from 'react-redux';

const msp = state => ({
  products: state.entities.products,
  shops: state.entities.shops
});


export default connect(msp, null)(Index);