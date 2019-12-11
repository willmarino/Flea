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
        <img src="" alt="Logo"/>
        <input type="text"/>
        <div>Sell on Etsy</div>
        <div>Favorites</div>
        <div>Notifications</div>
        <Link to="/anon"><button onClick={this.handleSignOut}>Sign Out</button></Link>
        <div>Cart</div>
      </div>
    )
  }
}

export default UserHeader;