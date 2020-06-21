import { connect } from 'react-redux';
import CartOrderForm from './cart_order_form';

import { createOrder } from '../../actions/order_actions';

const msp = (state) => {
  let productIds = Object.values(state.entities.cartItems).map((el) => el.item_id);
  return({
    user : state.session.currentUser,
    productIds : productIds
  })
}

const mdp = (dispatch) => ({
  createOrder : (order) => dispatch(createOrder(order)),
  
})

export default connect(msp, mdp)(CartOrderForm);