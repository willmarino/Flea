import React from 'react';
import ShopManagerSideBarMainContainer from './shop_manager_sidebar_main/smsm_container';
import ShopManagerSideBarSalesContainer from './shop_manager_sidebar_sales/shop_manager_sidebar_sales_container';
import SHopManagerSidebarBottomContainer from './shop_manager_sidebar_bottom/shop_manager_sidebar_bottom_container';

class ShopManagerSideBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="shop-manager-sidebar-container">
        <ShopManagerSideBarMainContainer/>
        <ShopManagerSideBarSalesContainer/>
        <SHopManagerSidebarBottomContainer/>
      </div>
    )
  }
}

export default ShopManagerSideBar;