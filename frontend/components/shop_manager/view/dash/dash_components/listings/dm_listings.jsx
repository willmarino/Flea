import React from 'react';
import DMListingsHeaderContainer from './dm_listings_header_container';
import DMListingsMid from './dm_listings_mid';
import DMListingsFooter from './dm_listings_footer';

class DMListings extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    if(this.props.shops.ownedShopIds){
      this.props.fetchOwnedShopListings(this.props.shops.ownedShopIds[0]);
    }
  }

  render(){
    if(!this.props.products.shopProductIds){
      return <p>loading</p>;
    }
    return(
      <div className="SML-container">
        <DMListingsHeaderContainer/>
        <DMListingsMid products={this.props.products}/>
        <DMListingsFooter/>
      </div>
    )
  }
}

export default DMListings;