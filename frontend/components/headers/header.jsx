import React from 'react';

import SessionModalContainer from '../modal/session_modal_container';
import HeaderTop from './header_top';
import AnonHeaderOptions from './header_options/anon_header_options';
import CategoriesNavContainer from './categories_nav/categories_nav_container';

const Header = (props) => {
  let options;
  let sessionModal;
  if(!props.loggedIn){
    options = <AnonHeaderOptions/>
  }else{
    // options = <UserHeaderOptions/>
  }
  return(
    <div className="main-header-container">
      <HeaderTop loggedIn={props.loggedIn}/>
      <CategoriesNavContainer/>
      <SessionModalContainer/>
    </div>
  )
}

export default Header;