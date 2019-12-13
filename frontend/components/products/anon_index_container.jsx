import React from 'react';
import Index from './index';
import { fetchProducts } from '../../actions/product_actions';
import { connect } from 'react-redux';

const msp = state => ({
  products: state.entities.products
});

// const mdp = dispatch => ({
//   products: () => dispatch(fetchProducts())
// });

export default connect(msp, null)(Index);