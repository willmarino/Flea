import React from 'react';

class DMListingsMidSidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="SML-mid-sidebar">
        <div className="SML-mid-sidebar-one">
          <p>Quick Edit</p>
        </div>
        <div className="SML-mid-sidebar-two">
          <div className="SML-mid-sidebar-two-left">
            <p>Stats</p>
            <p>Sw!!!</p>
          </div>
          <div className="SML-mid-sidebar-two-right">
            <div>
              <p>bi!!!</p>
            </div>
            <div>
              <p>bi!!!</p>
            </div>
          </div>
        </div>
        <div className="SML-mid-sidebar-three">
          <p>Sort</p>
          <div>
            <p>Expiration: latest first###</p>
          </div>
        </div>
        <div className="SML-mid-sidebar-four">
          <p>Listing Status</p>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Active </p>
            <p>num##</p>
          </div>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Draft </p>
            <p>num##</p>
          </div>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Expired </p>
            <p>num##</p>
          </div>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Sold Out </p>
            <p>num##</p>
          </div>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Inactive </p>
            <p>num##</p>
          </div>
          <div className="SML-mid-sidebar-four-box">
            <input type="checkbox"/>
            <p>Active </p>
            <p>num##</p>
          </div>
        </div>
        <div className="SML-mid-sidebar-five">
          <div className="SML-mid-sidebar-five-box">
            <input type="checkbox"/>
            <p>Featured Listings</p>
          </div>
          <div className="SML-mid-sidebar-five-box">
            <input type="checkbox"/>
            <p>Listings with restock requests</p>
          </div>
        </div>
        <div className="SML-mid-sidebar-six">
          <p>Sections</p>
          <p>Organize your listings</p>
        </div>
        <div className="SML-mid-sidebar-seven">
          <p>More Filters</p>
          <p>i!!!</p>
        </div>
      </div>
    )
  }
}

export default DMListingsMidSidebar;