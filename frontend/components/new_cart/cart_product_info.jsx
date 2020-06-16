import React from 'react';
import { withRouter } from 'react-router-dom';


const CartProductInfo = (props) => {
  let { product, shop, cartItem, handleDelete, history } = props;
  let options = cartItem.chosen_options.map((chosenOption) => {
    return <p>{chosenOption}</p>
  })
  return(
    <div className='cart-product-info-container'>
      <p id='cart-product-info-productname' onClick={() => {history.push(`/products/${product.id}`)}}>{product.name}</p>
      <p id='cart-product-info-shopname' onClick={() => {history.push(`/shops/${shop.id}`)}}>{shop.name}</p>
      <div className='cart-product-info-options'>
        {options}
      </div>
      <p onClick={handleDelete(cartItem.id)} className='cart-button'>Remove</p>
    </div>
  )
}

export default withRouter(CartProductInfo);