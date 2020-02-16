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
    this.props.fetchCartShow();
  }

  allPresent(){
    if(
      this.props.cartId &&
      this.props.cartItems &&
      this.props.shops &&
      this.props.products &&
      (Object.values(this.props.cartProducts).length === this.props.cartItems.length)
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
          cartProducts={this.props.cartProducts}
          shops={this.props.shops}
          deleteCartItem={this.props.deleteCartItem}
          loggedIn={this.props.loggedIn}/>
        <CartShowRecommended
          products={this.props.products}
          shop={this.props.shops[this.props.products[0].shop_id]}
          createCartItem={this.props.createCartItem}
          cartId={this.props.cartId}/>
        <CartShowFooter/>
      </div>
    )
  }
}

export default CartShow;