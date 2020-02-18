import { connect } from 'react-redux';
import CartShow from './cart_show';

import { fetchCartShow } from '../../actions/cart_actions';
import { deleteCartItem, createCartItem } from '../../actions/cart_item_actions';

const msp = (state, ownProps) => {
  return({
    cartItems : state.entities.cartItems,
    shops : state.entities.shops.byProducts,
    products : state.entities.products.byShop,
    loggedIn : Boolean(state.session.currentUser),
    cartId : state.entities.carts,
    cartProducts : state.entities.products.inCart
  })
};

const mdp = (dispatch) => ({
  fetchCartShow : () => dispatch(fetchCartShow()),
  deleteCartItem : (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  createCartItem : (cartItem) => dispatch(createCartItem(cartItem))

});

export default connect(msp, mdp)(CartShow);