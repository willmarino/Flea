import React from 'react';

const CartOrderForm = (props) => {
  let { createOrder, user, productIds } = props;
  return(
    <div className='checkout-button-container' onClick={() => {createOrder({user_id: user.id, product_ids: productIds})}}>
      <p className='cart-button' id='cart-checkout'>Check Out</p>
    </div>
  )
}

export default CartOrderForm;