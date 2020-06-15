import React from 'react';

class UserInfoDropdown extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let { logoutUser, user } = this.props;
    return(
      <div className='user-info-dropdown-container'>
        <div className='user-info-dropdown-top'>
          <img src={user.photoURL} alt="" className='user-info-dropdown-avatar'/>
          <div className='user-info-dropdown-top-second'>
            <p>{user.username}</p>
            <p>View Profile</p>
          </div>
        </div>
        <div className="user-info-dropdown-border"></div>
        <div className='user-info-dropdown-mid'>
          <p>Gift Card Balance</p>
          <p>Messages</p>
          <p>Purchases and Reviews</p>
          <p>Account Settings</p>
          <p>Your Teams</p>
        </div>
        <div className="user-info-dropdown-border"></div>
        <div className='user-info-dropdown-bottom' onClick={logoutUser}>
          <p>Sign Out</p>
        </div>
      </div>
    )
  }
}

export default UserInfoDropdown;