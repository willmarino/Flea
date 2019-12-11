import React from 'react';

class DemoUser extends React.Component{
  constructor(props){
    super(props);

    this.handleDemoSignin = this.handleDemoSignin.bind(this);

  }


  handleDemoSignin(e){
    e.preventDefault();
    
  }

  render(){
    return(
      <button onClick={this.handleDemoSignin}>Demo Sign In</button>
    );
  }

}