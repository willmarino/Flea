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
      fetched : false,
      userModalStatus : false,
      userModal : null
    }
    this.createUserModal = this.createUserModal.bind(this);
    this.setModalStatus = this.setModalStatus.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSMPlink = this.handleSMPlink.bind(this);
  }

  createUserModal(){
    return(
      <div className='user-modal'>
        <div className='usermodal-profile-block'>
          <div>
            <i className="far fa-user-circle"></i>
          </div>
          <div className='usermodal-profile-info'>
            <p>{this.props.currentUser.username}</p>
            <p>View Profile</p>
          </div>
        </div>
        <div>
          <i></i>
          <p>gift card balance : $0.00</p>
        </div>
        <div>
          <i></i>
          <p>Messages</p>
        </div>
        <div>
          <p>Purchases and Reviews</p>
        </div>
        <div>
          <p>Account Settings</p>
        </div>
        <div>
          <p>Your Teams</p>
        </div>
        <div onClick={this.handleSignOut}>
          <p>Sign Out</p>
        </div>
      </div>
    )
  }

  componentDidMount(){
    let modal = this.createUserModal();
    this.setState({ userModal : modal });
  }

  setModalStatus(){
    this.setState({ userModalStatus : !this.state.userModalStatus})
  }

  handleSignOut(e){
    e.preventDefault();
    this.props.signoutUser();
  }

  handleSMPlink(){
    this.props.history.push('/shops-manager/dashboard');
  }

  render(){
    let cartPath = "/cart";
    let userModal;
    if(this.state.userModalStatus){
      userModal = this.state.userModal;
    }else{
      userModal = null;
    }
    return(
      <div className="header">
        <Link to="/" className='logo-link'><div className="logo" id="first">Flea</div></Link>
        <MainSearchbarContainer/>
        <div className="header-items" id="user-header-items">
          <div id="header-item-two">
            <i className="fa fa-heart"></i>
            <p id='header-p'>Favorites</p>
          </div>
          <div id="header-item-three">
            <i className="fa fa-bell"></i>
            <p>Notifications</p>
          </div>
          <div onClick={this.handleSMPlink} id="header-item-three">
            <img src="https://img.icons8.com/ios-filled/100/000000/shop.png" className='store-icon'/>
            <p>Shops</p>
          </div>
          <div id="header-item-four" onClick={this.setModalStatus}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <p>You</p>
            {userModal}
          </div>

          <Link to={cartPath}><button className="cart"><i className="fa fa-shopping-cart"></i></button></Link>
        </div>
      </div>
    )
  }
}

export default UserHeader;
