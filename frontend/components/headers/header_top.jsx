import React from 'react';
import { Link } from 'react-router-dom';
import MainSearchbarContainer from './main_searchbar_container';
import AnonHeaderOptions from './header_options/anon_header_options';
import UserHeaderOptions from './header_options/user_header_options';

const HeaderTop = (props) => {
  let options;
    if(!props.loggedIn){
      options = <AnonHeaderOptions/>
    }else{
      options = <UserHeaderOptions/>
    }
  return(
    <div className="top-header-container">
      <Link to="/anon"><div className="logo" >Flea</div></Link>
      <MainSearchbarContainer/>
      {options}
    </div>
  )
}

export default HeaderTop;