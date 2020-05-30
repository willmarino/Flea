import React from 'react';
import { Link } from 'react-router-dom';
import MainSearchbarContainer from './main_searchbar_container';
import AnonHeaderOptions from './header_options/anon_header_options';

const Header = (props) => {
    let options;
    if(!props.loggedIn){
      options = <AnonHeaderOptions/>
    }else{
      // options = <UserHeaderOptions/>
    }
    return(
      <div className="header">
        <Link to="/anon"><div className="logo" >Flea</div></Link>
        <MainSearchbarContainer/>
        {options}
        <CategoriesNav/>
      </div>
    )
}

export default Header;