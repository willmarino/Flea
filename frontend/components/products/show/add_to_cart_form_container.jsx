import { connect } from 'react-redux';

import AddToCartForm from './add_to_cart_form';
// import { createCartItem } from '../../../actions/cart_item_actions';
import { createCartItem } from '../../../actions/newest_cartitem_actions';

const msp = (state, ownProps) => ({
  // cart: state.entities.carts['currentCart'],
  cartItems : state.entities.cartItems,
  product: ownProps.product,
  shop: ownProps.shop,
  productAvg: ownProps.productAvg,
  pCount: ownProps.pCount,
  curPath: ownProps.curPath,
  loggedIn: Boolean(state.session.currentUser),
});

const mdp = (dispatch) => ({
  createCartItem : (cartItem) => dispatch(createCartItem(cartItem))
});

export default connect(msp, mdp)(AddToCartForm);