import React from 'react';

class CartShowOrder extends React.Component{
  constructor(props){
    super(props);

    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder(){
    let user_id = this.props.user.id;
    let product_ids = this.props.productIds;
    // we need the user id for the order creation and the product ids for the product order creations
    this.props.createOrder({user_id : user_id, product_ids : product_ids});
  }

  render(){
    return(
      <div onClick={this.handleOrder}>Order</div>
    )
  }
}

export default CartShowOrder;