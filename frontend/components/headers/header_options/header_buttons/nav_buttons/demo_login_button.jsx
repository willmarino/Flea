import React from 'react';

class DemoLoginButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.loginUser({username: "demouser", password: "password"});
  }
  render(){
    return(
      <div onClick={this.handleClick} className="header-button">
        <p>DemoUser Login</p>
      </div>
    )
  }

}

export default DemoLoginButton;