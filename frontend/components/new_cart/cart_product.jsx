import React from 'react';
import { withRouter } from 'react-router-dom';
import CartProductInfo from './cart_product_info';
import ProductPrice from '../products/product_preview/product_info_types/product_price';


const CartProduct = (props) => {
  let { product, shop, cartItem, handleDelete, history } = props;
  return(
    <div className='cart-product-container'>
      <img src={product.photoURL} alt="" className='cart-product-photo' onClick={() => {history.push(`/products/${product.id}`)}}/>
      <CartProductInfo product={product} shop={shop} cartItem={cartItem} handleDelete={handleDelete}/>
      <ProductPrice product={product}/>
    </div>
  )
}

export default withRouter(CartProduct);