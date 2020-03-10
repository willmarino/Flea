import React from 'react';
import TrendingItem from './trending_item';

class TrendingItems extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.products.mostBought){
      this.props.fetchTrendingItems();
    }
  }

  render(){
  debugger;
  if(!this.props.products.mostBought){
    return <p>loading</p>;
  }
  debugger;
  let { shops, products } = this.props;
  let mostViewedShop = shops[shops.mostViewed];
  let mostOrderedShop = shops[shops.mostOrdered];
  let mostBoughtProduct = products[products.mostBought];
    return(
      <div className="trending-items-container">
        <div className="trending-items-header">
          <p className="trending-items-header-one">Trending</p>
          <p className="trending-items-header-two">Read the Etsy Journal</p>
        </div>
        <div className="trending-items-main">
          <TrendingItem item={mostViewedShop} header="Most Viewed Shop" loggedIn={this.props.loggedIn}/>
          <TrendingItem item={mostOrderedShop} header="Highest Selling Shop" loggedIn={this.props.loggedIn}/>
          <TrendingItem item={mostBoughtProduct} header="Most Bought Product" loggedIn={this.props.loggedIn}/>
        </div>
      </div>
    )
  }
}

export default TrendingItems;