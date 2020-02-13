import React from 'react';
import ShopTopBanner from './shop_top_banner';
import ShopProductsContainer from './shop_products_container';

class ShopShow extends React.Component{
  constructor(props){
    super(props);

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    this.props.fetchShopShow(this.props.curShopId);
  }

  allPresent(){
    if(this.props.shop &&
        this.props.shopOwner &&
        this.props.products){
          return true;
        }else{
          return false;
        }
  }

  render(){
    if(!this.allPresent()){
      return <p></p>;
    }
    return(
      <div>
        <ShopTopBanner shop={this.props.shop} curShopId={this.props.curShopId} shopOwner={this.props.shopOwner}/>
        <ShopProductsContainer shop={this.props.shop} curShopId={this.props.curShopId} products={this.props.products}/>
      </div>
    ) 
  }
}

export default ShopShow;