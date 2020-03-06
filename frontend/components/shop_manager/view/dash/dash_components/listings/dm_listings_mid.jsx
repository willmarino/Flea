import React from 'react';
import DMListingsMidMain from './dm_listings_mid_main';
import DMListingsMidSidebar from './dm_listings_mid_sidebar';

class DMListingsMid extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="SML-mid-container">
        <DMListingsMidMain products={this.props.products}/>
        <DMListingsMidSidebar/>
      </div>
    )
  }
}

export default DMListingsMid;