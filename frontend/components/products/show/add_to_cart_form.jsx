import React from 'react';

class AddToCartForm extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // ({ addItemToCart, cart } = this.props);
    // addItemToCart(cart, item);
    this.props.addItemToCart(this.props.product, this.props.cart.id)
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value='Add To Cart'></input>
      </form>
    )
  }
}

export default AddToCartForm;