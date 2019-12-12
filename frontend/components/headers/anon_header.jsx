import React from 'react';
import DemoUserContainer from '../users/demo_user_container';


class AnonHeader extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="header">
        <div className="logo">Flea</div>
        <input type="text" className="search"/>
        <button onClick={() => this.props.openModal('login')}>Sign In</button>
        <DemoUserContainer/>
        <div className="cart"><i className="fas fa-shopping-cart"></i></div>
      </div>
    );
  }
}

export default AnonHeader;