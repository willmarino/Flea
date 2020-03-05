import React from 'react';

class DMDMListingsBlock extends React.Component{
  constructor(props){
    super(props);
    this.filterListingsByQuantity = this.filterListingsByQuantity.bind(this);
    this.filterListingsByQuantity();
  }

  filterListingsByQuantity(){
    let { listings } = this.props;
    this.inStock = 0;
    this.outOfStock = 0;
    listings.forEach((li) => {
      if(li.stock_amt !== 0){
        this.inStock += 1
      }else{
        this.outOfStock += 1
      }
    });
  }

  render(){
    return(
      <div className="SM-dashboard-main-listings-block-container">
        <div className="SM-dashboard-main-stat-block-header">
          <p>Listings</p>
          <p>View all listings</p>
        </div>
        <div className="SM-dashboard-main-stat-block-body">
          <div className="SM-dashboard-main-stat-block-body-bar">
            <p>Current Listings</p>
            <p>{this.inStock}</p>
          </div>
          <div className="SM-dashboard-main-stat-block-body-bar">
            <p>Sold out</p>
            <p>{this.outOfStock}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DMDMListingsBlock;