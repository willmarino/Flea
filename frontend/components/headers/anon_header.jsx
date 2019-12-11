import React from 'react';


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
        <div className="cart"><i className="fas fa-shopping-cart"></i></div>
      </div>
    );
  }
}

export default AnonHeader;