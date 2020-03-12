import React from 'react';
// import ShopTopBanner from './shop_top_banner';
import ShopTopBannerContainer from './shop_top_banner_container';
import ShopProductsContainer from './shop_products_container';
import ShopReviews from './shop_reviews'

class ShopShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let { fetchOrdersByShop, fetchShopShow, addShopView, curShopId } = this.props;
    fetchShopShow(curShopId);
    fetchOrdersByShop(curShopId);
    addShopView(curShopId);
  }

  render(){
    let { pageLoaded, orders } = this.props;
    if(pageLoaded[pageLoaded.length - 1] !== 'shopshow' || !orders.shopOrderIds){
      return <p>loading</p>;
    }
    let { users, shops, curShopId } = this.props;
    let curShop = shops[curShopId];
    return(
      <div>
        <ShopTopBannerContainer
          shop={curShop}
          curShopId={this.props.curShopId}
          shopOwner={users[curShop.creator_id]}
          currentUser={this.props.currentUser}
          sales={this.props.orders.shopOrderIds}
          numReviews={this.props.reviews.shopReviewIds.length}/>
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