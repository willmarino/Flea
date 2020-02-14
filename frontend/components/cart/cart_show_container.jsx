import { connect } from 'react-redux';
import CartShow from './cart_show';

import { fetchCartShow } from '../../actions/cart_actions';
import { deleteCartItem } from '../../actions/cart_item_actions';

const msp = (state, ownProps) => {
  debugger;
  return({
    cart : state.entities.carts['currentCart'],
    cartItems : state.entities.cartItems,
    shops : state.entities.shops.byProducts,
    products : state.entities.products.shopProducts
  })
};

const mdp = (dispatch) => ({
  fetchCartShow : () => dispatch(fetchCartShow()),
  deleteCartItem : (cartItemId) => dispatch(deleteCartItem(cartItemId))

});

export default connect(msp, mdp)(CartShow);