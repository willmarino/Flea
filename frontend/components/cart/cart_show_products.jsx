import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './cart_product';
import CartShowOrderContainer from './cart_show_order_container';

class CartShowProducts extends React.Component{
  constructor(props){
    super(props);
    this.compileItems = this.compileItems.bind(this);
  }

  compileItems(){
    let { cartItems, cartProducts } = this.props;
    let organizedItems = {};
    for(let i = 0; i < Object.values(cartItems).length; i++){
      let ci = Object.values(cartItems)[i];
      let shopId = cartProducts[ci.item_id].shop_id;
      let newCartProd = (
        <CartProduct
            cartItem={ci}
            product={cartProducts[ci.item_id]}
            shop={this.props.shops[shopId]}
            loggedIn={this.props.loggedIn}
            deleteCartItem={this.props.deleteCartItem}/>
      )
      if(organizedItems[shopId]){
        organizedItems[shopId].push(
          newCartProd
        );
      }else{
        organizedItems[shopId] = [
          newCartProd
        ];
      }
    }
    let items = [];
    let itemKeys = Object.keys(organizedItems);
    for(let i = 0; i < itemKeys.length; i++){
      let curKey = itemKeys[i];
      let shopPath;
      if(this.props.loggedIn){
        shopPath = `/shops/${curKey}`;
      }else{
        shopPath = `/anon/shops/${curKey}`;
      }
      items.push(
        <ul>
          <div className="cart-show-item-shop-info">
            <Link to={shopPath}>
              <img src={this.props.shops[curKey].photoURL} alt="" className="cart-products-shop-photo"/>
            </Link>
            <p>{this.props.shops[curKey].name}</p>
          </div>
          {organizedItems[curKey]}
        </ul>
      )
    }
    return items;
  }

  render(){
    if(this.props.cartItems.length === 0){
      return(
        <p>x</p>
      )
    }
    this.items = this.compileItems();

    return(
      <div className="cart-products-container">
        <div className="cart-products-header-bar">
          <p>{this.props.cartItems.length} Items in your cart</p>
          <p>Keep shopping</p>
        </div>
        <div className="cart-products-checkout-and-products">
          <div className="cart-products-products">
            {this.items}
          </div>
          <div className="cart-products-checkout">
            <CartShowOrderContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default CartShowProducts;