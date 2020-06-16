import React from 'react';
import CartProduct from './cart_product';

const CartProducts = (props) => {
  let { products, shops, cartItems, handleDelete } = props;
  let cartItemList = Object.values(cartItems).map((cartItem) => {
    return <CartProduct cartItem={cartItem} product={products[cartItem.item_id]} shop={shops[products[cartItem.item_id].shop_id]} handleDelete={handleDelete}/>
  })
  return(
    <div className='cart-products-container'>
      {cartItemList}
      <div className='checkout-button-container'>
        <p className='cart-button' id='cart-checkout'>Check Out</p>
      </div>
    </div>
  )
}

export default CartProducts;