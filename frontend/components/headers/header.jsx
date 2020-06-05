import React from 'react';
// import ModalContainer from '../modal/modal_container';
import SessionModal from '../modal/session_modal';

import HeaderTop from './header_top';

import AnonHeaderOptions from './header_options/anon_header_options';
import CategoriesNavContainer from './categories_nav/categories_nav_container';

const Header = (props) => {
    let options;
    if(!props.loggedIn){
      options = <AnonHeaderOptions/>
    }else{
      // options = <UserHeaderOptions/>
    }
    return(
      <div className="main-header-container">
        <HeaderTop loggedIn={props.loggedIn}/>
        <CategoriesNavContainer/>
        <SessionModal/>
        {/* <ModalContainer/> */}
      </div>
    )
}

export default Header;