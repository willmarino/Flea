import React from 'react';
import ShopManagerSideBarMainContainer from './shop_manager_sidebar_main_container';
import ShopManagerSideBarSalesContainer from './shop_manager_sidebar_sales_container';

class ShopManagerSideBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ShopManagerSideBarMainContainer/>
        <ShopManagerSideBarSalesContainer/>
      </div>
    )
  }
}

export default ShopManagerSideBar;