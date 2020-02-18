import { connect } from 'react-redux';

import AddToCartForm from './add_to_cart_form';
import { createCartItem } from '../../../actions/cart_item_actions';

const msp = (state, ownProps) => ({
  cart: state.entities.carts['currentCart'],
  product: ownProps.product,
  shop: ownProps.shop,
  productAvg: ownProps.productAvg,
  pCount: ownProps.pCount,
  loggedIn: Boolean(state.session.currentUser),
  cartItems : state.entities.cartItems
});

const mdp = (dispatch) => ({
  createCartItem : (cartItem) => dispatch(createCartItem(cartItem))
});

export default connect(msp, mdp)(AddToCartForm);