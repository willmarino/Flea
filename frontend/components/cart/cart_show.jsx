import React from 'react';
import CartShowFooter from './cart_show_footer';
import CartShowRecommended from './cart_show_recommended';
import CartShowProducts from './cart_show_products';

class CartShow extends React.Component{
  constructor(props){
    super(props);

    // this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    this.props.fetchCartShow();
  }

  // allPresent(){
  //   if(
  //     (Number.isInteger(this.props.cartId)) &&
  //     (Object.values(this.props.cartProducts).length === Object.values(this.props.cartItems).length)
  //   ){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  render(){
    // if there are pieces of info missing
    // if(!this.allPresent()){
    //   return <p></p>;
    // if all info is there but cart is empty
    if(this.props.pageLoaded !== "cartshow"){
      return <p></p>;
    }

    if(Object.values(this.props.cartItems).length === 0){
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
    let { products, cartItems, shops } = this.props;
    let cartProducts = {}
    for(let i = 0; i < Object.values(cartItems).length; i++){
      let ci = Object.values(cartItems)[i];
      cartProducts[ci.item_id] = products[ci.item_id];
    }
    let shopProducts = products.shopProductIds.map((id) => products[id]);
    
    return(
      <div className="cart-show-container">
        <CartShowProducts
          cartItems={cartItems}
          cartProducts={cartProducts}
          shops={shops}
          deleteCartItem={this.props.deleteCartItem}
          loggedIn={this.props.loggedIn}/>
        <CartShowRecommended
          products={shopProducts}
          shop={this.props.shops[Object.values(cartProducts)[0].shop_id]}
          createCartItem={this.props.createCartItem}
          cartId={this.props.cartId}
          cartProducts={cartProducts}
          loggedIn={this.props.loggedIn}/>
        <CartShowFooter/>
      </div>
    )
  }
}

export default CartShow;