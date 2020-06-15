import React from 'react';

import SessionModalContainer from '../modal/session_modal_container';
import HeaderTop from './header_top';
// import AnonHeaderOptions from './header_options/anon_header_options';
// import UserHeaderOptions from './header_options/user_header_options';
import CategoriesNavContainer from './categories_nav/categories_nav_container';

const Header = (props) => {
  let options;
  let sessionModal;
  return(
    <div className='full-width-header-container'>
      <div className="main-header-container">
        <HeaderTop loggedIn={props.loggedIn}/>
        <CategoriesNavContainer/>
        <SessionModalContainer/>
      </div>
    </div>
  )
}

export default Header;