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

  render(){
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
          <button id="header-item-four" onClick={this.handleSignOut}>
            <i className="fa fa-user"></i>
            <p>You(sign out)</p>
          </button>
          <div id="header-item-five"><i className="fa fa-shopping-cart"></i></div>
        </div>
      </div>
    )
  }
}

export default UserHeader;