import React from 'react';
import ShopTopBanner from './shop_top_banner';
import ShopProductsContainer from './shop_products_container';
import ShopReviews from './shop_reviews'

class ShopShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchShopShow(this.props.curShopId);
    this.props.addShopView(this.props.curShopId);
  }

  render(){
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
          shopOwner={users[curShop.creator_id]}
          createShopFavorite={this.props.createShopFavorite}
          currentUser={this.props.currentUser}/>
        <ShopProductsContainer
          shop={curShop}
          curShopId={this.props.curShopId}
          products={this.props.products}
          categories={this.props.categories}/>
        <ShopReviews
          reviews={this.props.reviews}
          shop={curShop}
          products={this.props.products}
          users={this.props.users}/>
      </div>
    ) 
  }
}

export default ShopShow;