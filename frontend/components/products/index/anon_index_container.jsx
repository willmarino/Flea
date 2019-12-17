import React from 'react';
import Index from './index';
import { fetchProducts } from '../../../actions/product_actions';
import { fetchShops } from '../../../actions/shop_actions';
import { connect } from 'react-redux';

const msp = state => ({
  products: state.entities.products,
  shops: state.entities.shops
});

const mdp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
});


export default connect(msp, mdp)(Index);