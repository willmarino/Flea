import React from 'react';

class OpenLoginModalButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.openModal();
  }
  render(){
    return(
      <div className="header-button" onClick={this.handleClick}>
        <p>Sign In</p>
      </div>
    )
  }
}

export default OpenLoginModalButton;