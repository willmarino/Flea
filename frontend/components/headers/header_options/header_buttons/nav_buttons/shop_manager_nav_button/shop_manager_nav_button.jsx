import React from 'react';
import { withRouter } from 'react-router-dom';
import { GiShop } from 'react-icons/gi';

class ShopManagerNavButton extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let { history } = this.props;
    return(
      <div className="header-button" onClick={() => { history.push('/shops-manager/dashboard') }}>
        <GiShop/>
      </div>
    )
  }
}
export default withRouter(ShopManagerNavButton);