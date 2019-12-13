import React from 'react';

class DemoUser extends React.Component{
  constructor(props){
    super(props);

    this.handleDemoSignin = this.handleDemoSignin.bind(this);
  }


  handleDemoSignin(e){
    e.preventDefault();
    this.props.loginDemoUser(this.props.demoUser);
    this.props.sendUserToState(this.props.demoUser);
  }

  render(){
    return(
      <button onClick={this.handleDemoSignin}>Demo User</button>
    );
  }

}

export default DemoUser;