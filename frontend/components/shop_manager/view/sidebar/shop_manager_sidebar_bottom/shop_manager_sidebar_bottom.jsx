import React from 'react';

class ShopManagerSidebarBottom extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
    <p>{this.props.currentUser.username}</p>
    )
  }
}

export default ShopManagerSidebarBottom;