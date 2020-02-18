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
      (Number.isInteger(this.props.cartId)) &&
      (Object.values(this.props.cartProducts).length === Object.values(this.props.cartItems).length)
    ){
      return true;
    }else{
      return false;
    }
  }

  render(){
    // if there are pieces of info missing
    if(!this.allPresent()){
      debugger;
      return <p></p>;
    // if all info is there but cart is empty
    }else if(Object.values(this.props.cartItems).length === 0){
      debugger;
      return (
        <div className="cart-show-container">
          <div className="empty-cart-background-top">
            <div className="empty-cart-message-container">
              <p>you dont got none items in that there cart!</p>
            </div>
          </div>
          <div className="empty-cart-background-mid">

          </div>
          <div className="empty-cart-background-bottom">

          </div>
        </div>
      )
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
          cartId={this.props.cartId}
          cartProducts={this.props.cartProducts}/>
        <CartShowFooter/>
      </div>
    )
  }
}

export default CartShow;