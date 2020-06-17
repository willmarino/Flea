import React from 'react';
import ProductRow from '../products/row/product_row';

const CartRecommendedProducts = (props) => {
  let { products, loggedIn } = props;
  return(
    <ProductRow rowOfProducts={products} type={'complex'} loggedIn={loggedIn} category={'Recommended For You'}/>
  )
}

export default CartRecommendedProducts;