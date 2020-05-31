import React from 'react';
import { Link } from 'react-router-dom';
import MainSearchbarContainer from './main_searchbar_container';
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
      <div className="header">
        <div id="header-section-one">
          <Link to="/anon"><div className="logo" >Flea</div></Link>
          <MainSearchbarContainer/>
          {options}
        </div>
        <div id="header-section-two">
          <CategoriesNavContainer/>
        </div>
      </div>
    )
}

export default Header;