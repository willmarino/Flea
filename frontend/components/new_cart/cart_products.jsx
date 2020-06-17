import React from 'react';
import CartProduct from './cart_product';
import CartOrderFormContainer from './cart_order_form_container'
import { withRouter } from 'react-router-dom';

const CartProducts = (props) => {
  let { products, shops, cartItems, handleDelete, history } = props;
  let cartItemList = Object.values(cartItems).map((cartItem) => {
    return <CartProduct cartItem={cartItem} product={products[cartItem.item_id]} shop={shops[products[cartItem.item_id].shop_id]} handleDelete={handleDelete}/>
  })
  let homePageNav = (
    <div className='cart-products-homepage-nav' onClick={() => { history.push('/') }}>
      <p>Find new products to add to your cart! (click me)</p>
    </div>
  )
  let button = (cartItemList.length === 0) ? homePageNav : <CartOrderFormContainer/>
  return(
    <div className='cart-products-container'>
      {cartItemList}
      {button}
    </div>
  )
}

export default withRouter(CartProducts);