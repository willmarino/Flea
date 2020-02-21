// we need to display a basic nav
// we also need to display a signout button for the user
// when the signout button is clicked we need to redirect to the Anon page
// should I do this with a link or a componentdidmount?

import React from 'react';
import { Link } from 'react-router-dom';
import MainSearchbarContainer from './main_searchbar_container';

class UserHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      fetched : false
    }

    this.handleSignOut = this.handleSignOut.bind(this);
  }


  handleSignOut(e){
    e.preventDefault();
    this.props.signoutUser();
  }

  render(){
    let cartPath = "/cart";
    let shopManagerPath = "/shops-manager";
    return(
      <div className="header">
        <Link to="/"><div className="logo" id="first">Flea</div></Link>
        <MainSearchbarContainer/>
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
          <Link to={shopManagerPath}>
            <div>
              <p>shops</p>
            </div>
          </Link>
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


          <Link to={cartPath}><button className="cart"><i className="fa fa-shopping-cart"></i></button></Link>
        </div>
      </div>
    )
  }
}

export default UserHeader;


// onClick={this.handleSignOut} line 40