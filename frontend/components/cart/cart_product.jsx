import React from 'react';
import IndexItem from '../products/index/index_item';

class CartProduct extends React.Component{
  constructor(props){
    super(props);

    this.compileItemOptions = this.compileItemOptions.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  compileItemOptions(){
    let { cartItem, product } = this.props;
    let chosenOptions = [];
    for(let i = 0; i < cartItem.chosen_options.length; i++){
      let option = product.options[i];
      let choice = cartItem.chosen_options[i];
      chosenOptions.push(
        <li>
          <p>{option} : {choice}</p>
        </li>
      )
    }
    return (
      <ul>
        {chosenOptions}
      </ul>
    )
  }

  handleDelete(e){
    this.props.deleteCartItem(e.currentTarget.dataset.id)
  }

  render(){
    let { cartItem, product } = this.props;
    this.options = this.compileItemOptions();
    return(
      <li className="cart-product-container" key={product.id}>
        <div className='cart-product-cart-info'>
          <IndexItem product={product} type="cart" loggedIn={this.props.loggedIn}/>
          <div>
            <p>{product.name}</p>
            {this.options}
            <div>
              <p>save for later</p>
              <p onClick={this.handleDelete} data-id={cartItem.id}>remove</p>
            </div>
          </div>
          <div className="cart-show-product-quantity-and-price">
            <div>
              <p>Quant</p>
              <p>${product.price}</p>
            </div>
            <p>x many people have this item in cart</p>
          </div>
        </div>
      </li>
    )
  }
}

export default CartProduct;