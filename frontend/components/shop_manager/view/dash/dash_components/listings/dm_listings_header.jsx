import React from 'react';

class DMListingsHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(e){
    e.preventDefault();
    let { shops } = this.props;
    let ownedShop = shops[shops.ownedShopIds[0]];
    this.props.history.push(`/shops-manager/listings/add/${ownedShop.id}`);
  }

  render(){
    return(
      <div className="SML-header">
        <p>Listings</p>
        <div className="SML-header-right">
          <div className="shop-listings-search">
            <p className="shop-listings-search-mag">E</p>
            <input type="text"/>
            <p className="shop-listings-search-clear">X</p>
          </div>
          <div className="SML-header-right-two">
            <p className="SML-header-right-two-plus">+</p>
            <p onClick={this.handleNavigate} className="SML-header-right-two-add">Add Listings</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DMListingsHeader;