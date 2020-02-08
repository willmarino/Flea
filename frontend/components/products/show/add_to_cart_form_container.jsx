import { connect } from 'react-redux';

import AddToCartForm from './add_to_cart_form';

import { addItemToCart } from '../../../actions/cart_actions';

const msp = (state, ownProps) => ({
  cart: state.entities.carts['currentCart'],
  item: ownProps.product
});

const mdp = (dispatch) => ({
  addItemToCart : (item, cartId) => dispatch(addItemToCart(item, cartId))
});

export default connect(msp, mdp)(AddToCartForm);