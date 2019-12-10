import React from 'react';


class AnonHeader extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="header">
        <img src="" alt="Logo"/>
        <input type="text"/>
        <button onClick={() => this.props.openModal('login')}>Login</button>
        <div className="cart">Cart</div>
      </div>
    );
  }
}

export default AnonHeader;