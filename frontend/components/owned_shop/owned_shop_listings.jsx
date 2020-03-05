import React from 'react';

// const OwnedShopListings = (props) => {
class OwnedShopListings extends React.Component{
  constructor(props){
    super(props);
  }

  
  render(){
    return(
      <div className="OSL-container">
        <div className="OSL-header">
          <p>Items</p>
          <div>
            <p>Sort: Most Recent</p>
          </div>
        </div>
        <div className="OSL-listings">
          <div className="OSL-filters">
            <input type="text"/>

          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default OwnedShopListings;