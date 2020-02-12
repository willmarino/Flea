import React from 'react';

class ShopProducts extends React.Component{
  constructor(props){

  }

  componentDidMount(){
    this.props.fetchProductsByShop(this.props.curShopId);
  }

  render(){
    if()
    return(
      <p></p>
    )
  }
}

export default ShopProducts;