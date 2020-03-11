import React from 'react';
import OwnedShopHeader from './owned_shop_header';
import OwnedShopListings from './owned_shop_listings';

class OwnedShop extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchOwnedShopView(this.props.curProdId);
  }

  render(){
    if(this.props.pageLoaded[this.props.pageLoaded.length - 1] !== 'ownedshop'){
      return <p>loading</p>;
    }
    let { shops, products, categories, users } = this.props
    let ownedShop = shops[this.props.curProdId];
    return(
      <div className="OS-container">
          <OwnedShopHeader shop={ownedShop} user={users[ownedShop.creator_id]}/>
          <OwnedShopListings
            products={products.shopProductIds.map((id) => products[id])}
            categories={categories}/>
          <div className="OS-policies-container">

          </div>

      </div>
    )
  }
}
export default OwnedShop;