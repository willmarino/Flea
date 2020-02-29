import { connect } from 'react-redux';
import CartShow from './cart_show';


import { fetchCartShow } from '../../actions/newest_cart_actions';
import { createCartItem, deleteCartItem } from '../../actions/newest_cartitem_actions';

const msp = (state) => {
  return({
    cartItems : state.entities.cartItems,
    products : state.entities.products,
    shops : state.entities.shops,
    loggedIn : Boolean(state.session.currentUser),
    cartId : state.entities.carts,
    pageLoaded : state.pageLoaded
  })
};

const mdp = (dispatch) => ({
  fetchCartShow : () => dispatch(fetchCartShow()),
  deleteCartItem : (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  createCartItem : (cartItem) => dispatch(createCartItem(cartItem))

});

export default connect(msp, mdp)(CartShow);