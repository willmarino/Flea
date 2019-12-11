import React from 'react';


class AnonHeader extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="header">
        <div className="logo">Flea</div>
        <input type="text"/>
        <button onClick={() => this.props.openModal('login')}>Login</button>
        <div className="cart">Cart</div>
      </div>
    );
  }
}

export default AnonHeader;