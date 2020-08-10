import React from 'react';
import { withRouter } from 'react-router-dom';
import MainModalContainer from '../modal/main_modal_container';
import HeaderTop from './header_top';
import CategoriesNavContainer from './categories_nav/categories_nav_container';

const Header = (props) => {
  let { history } = props;
  if(history.location.pathname.startsWith('/shops-manager')){
    return null;
  }
  return(
    <div className='full-width-header-container'>
      <div className="main-header-container">
        <HeaderTop loggedIn={props.loggedIn}/>
        <CategoriesNavContainer/>
        <MainModalContainer/>
      </div>
    </div>
  )
}

export default withRouter(Header);