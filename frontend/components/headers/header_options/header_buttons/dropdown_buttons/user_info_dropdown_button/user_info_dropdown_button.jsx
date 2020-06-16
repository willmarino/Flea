import React from 'react';
import UserInfoDropdown from './user_info_dropdown';

class UserInfoDropdownButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.fetchUserById(this.props.user.id);
  }
  handleClick(){
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
  render(){
    let { logoutUser, user } = this.props;
    if(!user.photoURL){
      return null;
    }
    let dropdown = (this.state.dropdownOpen) ? <UserInfoDropdown logoutUser={logoutUser} user={user}/> : null;
    return(
      <div className='header-button' id='user-dropdown-button' onClick={this.handleClick}>
        <img src={user.photoURL} alt="" className='header-button-user-icon'/>
        {/* <p>You</p> */}
        {dropdown}
      </div>
    )
  }
}

export default UserInfoDropdownButton;