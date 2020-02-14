import React from 'react';

class CartShowProducts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.cartItems.length === 0){
      return(
        <div>
          <p>Your cart is empty</p>
        </div>
      )
    }

    return(
      <p>Cart Show Products</p>
    )
  }
}

export default CartShowProducts;