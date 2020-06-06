import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionModal from '../modal/session_modal';

import HeaderTop from './header_top';

import AnonHeaderOptions from './header_options/anon_header_options';
import CategoriesNavContainer from './categories_nav/categories_nav_container';

const Header = (props) => {
  let { history } = props;
  let options;
  let sessionModal;
  if(!props.loggedIn){
    options = <AnonHeaderOptions/>
  }else{
    // options = <UserHeaderOptions/>
  }
  if(history.location.pathname === '/anon/login'){
    sessionModal = <SessionModal/>
  }else{
    sessionModal = null;
  }
  return(
    <div className="main-header-container">
      <HeaderTop loggedIn={props.loggedIn}/>
      <CategoriesNavContainer/>
      {sessionModal}
    </div>
  )
}

export default withRouter(Header);