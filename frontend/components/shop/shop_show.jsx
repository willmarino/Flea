import React from 'react';
import ShopTopBanner from './shop_top_banner';
import ShopProductsContainer from './shop_products_container';
import ShopReviews from './shop_reviews'

class ShopShow extends React.Component{
  constructor(props){
    super(props);

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    this.props.fetchShopShow(this.props.curShopId);
    this.props.addShopView(this.props.curShopId);
  }

  allPresent(){
    if(this.props.shop &&
        this.props.shopOwner &&
        this.props.products &&
        this.props.reviews &&
        this.props.reviewAuthors &&
        this.props.reviewProducts &&
        this.props.reviewTags &&
        this.props.categories){
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
        <ShopTopBanner
          shop={this.props.shop}
          curShopId={this.props.curShopId}
          shopOwner={this.props.shopOwner}/>
        <ShopProductsContainer
          shop={this.props.shop}
          curShopId={this.props.curShopId}
          products={this.props.products}/>
        <ShopReviews
          reviews={this.props.reviews}
          shop={this.props.shop}
          authors={this.props.reviewAuthors}
          reviewProducts={this.props.reviewProducts}
          reviewTags={this.props.reviewTags}/>
      </div>
    ) 
  }
}

export default ShopShow;