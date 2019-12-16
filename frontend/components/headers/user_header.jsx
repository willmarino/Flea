// we need to display a basic nav
// we also need to display a signout button for the user
// when the signout button is clicked we need to redirect to the Anon page
// should I do this with a link or a componentdidmount?

import {Link} from 'react-router-dom';
import React from 'react';

class UserHeader extends React.Component{
  constructor(props){
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(e){
    e.preventDefault();
    this.props.signoutUser();
  }

  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchShops();
  }

  render(){

    // let currentUserName = this.props.currentUser.username;

    return(
      <div className="header">
        <div className="logo" id="first">Flea</div>
        <div className="search-and-icon" id="second">
          <input type="text" className="search" id="user-search"/>
          <i className="fa fa-search" id="user-search-icon"></i>  
        </div>
        <div className="header-items" id="user-header-items">
          <div id="header-item-one">Sell on Flea</div>
          <div id="header-item-two">
            <i className="fa fa-heart"></i>
            <p>Favorites</p>
          </div>
          <div id="header-item-three">
            <i className="fa fa-bell"></i>
            <p>Notifications</p>
          </div>

          <button id="header-item-four" className="dropdown">
            <i className="fa fa-user"></i>
            <p>You(Sign Out)</p>
            <div className="dropdown-content">
              <div className="dropdown-content-top">
                  <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                  <div>
                    {/* <p>{currentUserName}</p> */}
                    <p>View Profile</p>
                  </div>
              </div>
              <div className="dropdown-content-mid">
                <div className="dropdown-content-mid-gifts">
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>$93.46</p>
                </div>
                <div className="dropdown-content-mid-messages">
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                  <p>Messages</p>
                </div>
                <div className="dropdown-content-mid-pr">
                  <p>Purchases and reviews</p>
                </div>
                <div className="dropdown-content-mid-as">
                  <p>Accout Settings</p>
                </div>
              </div>
              <div className="dropdown-content-bottom">
                <div className="dropdown-content-signout" onClick={this.handleSignOut}>
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          </button>


          <div id="header-item-five"><i className="fa fa-shopping-cart"></i></div>
        </div>
      </div>
    )
  }
}

export default UserHeader;


// onClick={this.handleSignOut} line 40