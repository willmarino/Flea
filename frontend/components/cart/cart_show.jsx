import React from 'react';
import CartShowFooter from './cart_show_footer';
import CartShowRecommended from './cart_show_recommended';
import CartShowProducts from './cart_show_products';

class CartShow extends React.Component{
  constructor(props){
    super(props);

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    debugger;
    this.props.fetchCartShow();
    debugger;
  }

  allPresent(){
    if(
      this.props.cart &&
      this.props.cartItems &&
      this.props.shops &&
      this.props.products
    ){
      return true;
    }else{
      return false;
    }
  }

  render(){
    debugger;
    if(!this.allPresent()){
      return <p></p>;
    }
    debugger;
    return(
      <div className="cart-show-container">
        <CartShowProducts
          cartItems={this.props.cartItems}
          shops={this.props.shops}
          deleteCartItem={this.props.deleteCartItem}/>
        <CartShowRecommended
          products={this.props.products}/>
        <CartShowFooter/>
      </div>
    )
  }
}

export default CartShow;