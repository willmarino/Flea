import React from 'react';
import ShopManagerSideBar from './sidebar/shop_manager_sidebar';
import ShopManagerDashContainer from './dash/shop_manager_dash_container';

class ShopManagerMain extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="shop-manager-main-container">
        <ShopManagerSideBar/>
        <ShopManagerDashContainer/>
      </div>
    )
  }
}

export default ShopManagerMain;