import React from 'react';
import UserInfoDropdownButtonContainer from './header_buttons/dropdown_buttons/user_info_dropdown_button/user_info_dropdown_button_container';
import ShopManagerNavButton from './header_buttons/nav_buttons/shop_manager_nav_button/shop_manager_nav_button';
import FavoritesNavButton from './header_buttons/nav_buttons/favorites_nav_button';
import CartNavButton from './header_buttons/nav_buttons/cart_nav_button';

const UserHeaderOptions = () => {
  return(
    <div className="header-options-container">

      <FavoritesNavButton/>
      <ShopManagerNavButton/>
      <CartNavButton/>
      <UserInfoDropdownButtonContainer/>
    </div>
  )
}

export default UserHeaderOptions;