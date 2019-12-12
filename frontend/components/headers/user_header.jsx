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
        <div className="logo">Flea</div>
        <input type="text" className="search"/>
        <div className="header-items">
          <div id="header-item-one">Sell on Flea</div>
          <div id="header-item-two">Favorites</div>
          <div id="header-item-three">Notifications</div>
          <button id="header-item-four" onClick={this.handleSignOut}>Sign Out</button>
          <div id="header-item-five"><i className="fas fa-shopping-cart"></i></div>
        </div>
      </div>
    )
  }
}

export default UserHeader;