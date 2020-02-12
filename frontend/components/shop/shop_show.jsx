import React from 'react';
import ShopTopBanner from './shop_top_banner';

class ShopShow extends React.Component{
  constructor(props){

  }

  componentDidMount(){
    this.props.fetchShop(this.props.curShopId);
  }

  render(){
    return(
      <ShopTopBanner shop={this.props.shop}/>
      
    ) 
  }
}

export default ShopShow;