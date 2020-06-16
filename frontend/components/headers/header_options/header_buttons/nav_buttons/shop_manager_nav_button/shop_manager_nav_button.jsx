import React from 'react';
import { withRouter } from 'react-router-dom';

class ShopManagerNavButton extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    let { history } = this.props;
    return(
      <div className="header-button" onClick={}>
        <i class="fas fa-store"></i>
      </div>
    )
  }
}
export default withRouter(ShopManagerNavButton);