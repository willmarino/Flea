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
        <div>
            <p>Listings</p>
            <p>View all listings</p>
          </div>
          <div>
            <div>
              <p>Current Listings</p>
              <p>{this.inStock}</p>
            </div>
            <div>
              <p>Sold out</p>
              <p>{this.outOfStock}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default DMDMListingsBlock;