import React from 'react';

class UserLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleLogin(e){
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  // handleSwitch

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    return(
      <form>
        <label> Username
          <input type="text" onChange={this.update('username')} value={this.state.username}/>
        </label>
        <label> Password
          <input type="password" onChange={this.update('password')} value={this.state.password}/>
        </label>
        <button type="submit" onClick={this.handleLogin}>Log In</button>
        <button type="submit" onClick={this.handleLogout}>Log Out</button>
        {/* <button type="submit" onClick={this.handleSwitch}>Log Out</button> */}
        {this.props.signupForm}
      </form>
    );
  }

}

export default UserLogin;