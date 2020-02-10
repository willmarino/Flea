import { connect } from 'react-redux';

import AddToCartForm from './add_to_cart_form';

import { addItemToCart } from '../../../actions/cart_actions';

const msp = (state, ownProps) => ({
  cart: state.entities.carts['currentCart'],
  product: ownProps.product,
  shop: ownProps.shop,
  productAvg: ownProps.productAvg,
  pCount: ownProps.pCount,
  loggedIn: Boolean(state.session.currentUser),
  topLevelDoc: ownProps.topLevelDoc
});

const mdp = (dispatch) => ({
  addItemToCart : (item, cartId) => dispatch(addItemToCart(item, cartId))
});

export default connect(msp, mdp)(AddToCartForm);