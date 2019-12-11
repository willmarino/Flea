import React from 'react';

class UserLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleLogin(e){
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  handleSwitch(e){
    e.preventDefault();
    this.props.signupForm();
  }



  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    return(
      <form className="modal-form" >
        <div id="one" className="form-row">
          <div>Sign In</div>
          <button type="button" onClick={this.handleSwitch}>Register</button>
        </div>

        <div id="two" className="form-row">
          <label> Username
            <input className="login-input" type="text" onChange={this.update('username')} value={this.state.username}/>
          </label>
        </div>

        <div id="three" className="form-row">
          <label> Password
            <input className="login-input" type="password" onChange={this.update('password')} value={this.state.password}/>
          </label>
        </div>

        <div id="four" className="form-row">
          <button type="submit" onClick={this.handleLogin}>Sign In</button>
        </div>
      </form>
    );
  }

}

export default UserLogin;