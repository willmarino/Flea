import React from 'react';

// import { Link } from 'react-router-dom';
// import MainSearchbarContainer from './main_searchbar_container';

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
      </div>
    )
}

export default Header;