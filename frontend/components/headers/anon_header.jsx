import React from 'react';
import DemoUserContainer from '../users/demo_user_container';


class AnonHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "Search for items or shops"
    }

  }


  render(){
    return(
      <div className="header">
        <div className="logo" id="first">Flea</div>
        <input type="text" className="search" id="second" value={this.state.search}/>
        <div className="header-items" id="third">  
          <button onClick={() => this.props.openModal('login')}>Sign In</button>
          <DemoUserContainer/>
          <button className="cart"><i className="fas fa-shopping-cart"></i></button>
        </div>
      </div>
    );
  }
}

export default AnonHeader;