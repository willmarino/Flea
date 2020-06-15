import React from 'react';
// import ShopTopBanner from './shop_top_banner';
import DefaultSpinner from '../loading_spinners/default_spinner';
import { CSSTransition } from 'react-transition-group';
import ShopTopBannerContainer from './shop_top_banner_container';
import ShopProductsContainer from './shop_products_container';
import ShopReviews from './shop_reviews'

class ShopShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentDidMount(){
    let { fetchShopFavorites, fetchOrdersByShop, fetchShopShow, addShopView, curShopId } = this.props;
    window.scrollTo(0, 0)
    fetchShopFavorites(curShopId);
    fetchShopShow(curShopId);
    fetchOrdersByShop(curShopId)
      .then(() => {
        this.setState({
          mounted: true
        })
      })
    addShopView(curShopId);
  }

  render(){
    let { pageLoaded, orders } = this.props;
    if(pageLoaded[pageLoaded.length - 1] !== 'shopshow' || !orders.shopOrderIds){
      return <DefaultSpinner/>;
    }
    let { users, shops, curShopId } = this.props;
    let curShop = shops[curShopId];
    return(
      <CSSTransition classNames={'fade-shrink'} in={this.state.mounted} timeout={1500} appear={true}>
        <div className='shop-show-container'>
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
            categories={this.props.categories}
            numSales={this.props.orders.shopOrderIds.length}
            shopFavorites={this.props.shopFavorites}/>
          <ShopReviews
            reviews={this.props.reviews}
            shop={curShop}
            products={this.props.products}
            users={this.props.users}/>
        </div>
      </CSSTransition>
    ) 
  }
}

export default ShopShow;