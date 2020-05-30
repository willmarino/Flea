import React from 'react';
import OpenLoginModalButtonContainer from './header_buttons/modal_buttons/open_login_modal_button_container';
import DemoLoginButtonContainer from './header_buttons/nav_buttons/demo_login_button_container';
import CartNavButton from './header_buttons/nav_buttons/cart_nav_button';

const AnonHeaderOptions = () => {
  return(
    <div className="header-options-container">
      <OpenLoginModalButtonContainer/>
      <DemoLoginButtonContainer/>
      <CartNavButton/>
    </div>
  )
}

export default AnonHeaderOptions;