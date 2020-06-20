import React from 'react';
import ShopManagerSideBarMainContainer from './shop_manager_sidebar_main/smsm_container';
import SMSBContainer from './shop_manager_sidebar_bottom/smsb_container';

class ShopManagerSideBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="shop-manager-sidebar-container">
        <ShopManagerSideBarMainContainer/>
        <SMSBContainer/>
      </div>
    )
  }
}

export default ShopManagerSideBar;