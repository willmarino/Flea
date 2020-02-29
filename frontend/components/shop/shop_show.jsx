import React from 'react';
import ShopTopBanner from './shop_top_banner';
import ShopProductsContainer from './shop_products_container';
import ShopReviews from './shop_reviews'

class ShopShow extends React.Component{
  constructor(props){
    super(props);

    // this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    this.props.fetchShopShow(this.props.curShopId);
    this.props.addShopView(this.props.curShopId);
  }

  // allPresent(){
  //   if(this.props.shop &&
  //       this.props.shopOwner &&
  //       this.props.products &&
  //       this.props.reviews &&
  //       this.props.reviewAuthors &&
  //       this.props.reviewProducts &&
  //       this.props.reviewTags &&
  //       this.props.categories){
  //         return true;
  //       }else{
  //         return false;
  //       }
  // }

  render(){
    // if(!this.allPresent()){
    //   return <p></p>;
    // }
    if(this.props.pageLoaded !== 'shopshow'){
      return <p>loading</p>;
    }
    let { users, shops, curShopId } = this.props;
    let curShop = shops[curShopId];
    return(
      <div>
        <ShopTopBanner
          shop={curShop}
          curShopId={this.props.curShopId}
          shopOwner={users[curShop.creator_id]}/>
        <ShopProductsContainer
          shop={curShop}
          curShopId={this.props.curShopId}
          products={this.props.products}
          categories={this.props.categories}/>
        <ShopReviews
          reviews={this.props.reviews}
          shop={curShop}
          // authors={this.props.reviewAuthors}
          // reviewProducts={this.props.reviewProducts}
          // reviewTags={this.props.reviewTags}
          products={this.props.products}
          users={this.props.users}/>
      </div>
    ) 
  }
}

export default ShopShow;