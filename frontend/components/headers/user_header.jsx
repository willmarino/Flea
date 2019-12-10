import React from 'react';

class UserHeader extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="header">
        <img src="" alt="Logo"/>
        <input type="text"/>
        <div>Sell on Etsy</div>
        <div>Favorites</div>
        <div>Notifications</div>
        <div>You</div>
        <div>Cart</div>
      </div>
    )
  }
}

export default UserHeader;