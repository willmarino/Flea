import React from 'react';
import CartProducts from './cart_products';
import CartRecommendedProducts from './cart_recommended_products';
import DefaultSpinner from '../loading_spinners/default_spinner';


class Cart extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    let { fetchCartShow } = this.props;
    fetchCartShow();
  }
  handleDelete(itemId){
    let { deleteCartItem } = this.props;
    return () => {
      deleteCartItem(itemId);
    }
  }
  render(){
    let { cartItems, pageLoaded, products, shops, loggedIn } = this.props;
    if(pageLoaded[pageLoaded.length - 1] !== "cartshow"){
      return <DefaultSpinner/>;
    }
    let shopProducts = products.shopProductIds.map((id) => products[id]);

    return(
      <div className='cart-container'>
        <p className='cart-header'>{Object.values(cartItems).length} Items in your cart</p>
        <CartProducts products={products} cartItems={cartItems} shops={shops} handleDelete={this.handleDelete}/>
        <CartRecommendedProducts products={shopProducts.slice(0, 6)} loggedIn={loggedIn}/>
      </div>
    )
  }
}

export default Cart;