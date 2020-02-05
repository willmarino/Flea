import React from 'react';
import SessionErrors from '../errors/session_errors_container';


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

    // let usernameErrors = null;
    // let passwordErrors = null;

    // if (this.errors.username) {
    //   usernameErrors = <p>{this.errors.username}</p>;
    // }
    // if (this.errors.password) {
    //   passwordErrors = <p>{this.errors.password}</p>;
    // }

    let passErrors;
    let userErrors;

    if(this.props.errors){
      if(this.props.errors.includes("password")){
        passErrors = <SessionErrors/>;
      }else{
        userErrors = <SessionErrors/>;
      }
    }


    return(
      <form className="modal-form" >
        <div className="half-one">
          <div id="one" className="form-row">
            <div>Sign In</div>
            <button type="button" onClick={this.handleSwitch}>Register</button>
          </div>

          <div id="two" className="form-row">
              <p>Username</p>
              <input className="login-input" type="text" onChange={this.update('username')} value={this.state.username}/>
              <div>{userErrors}</div>
          </div>

          <div id="three" className="form-row">
              <p>Password</p>
              <input className="login-input" type="password" onChange={this.update('password')} value={this.state.password}/>
              <div>{passErrors}</div>
          </div>

          <div className="login-options">
            <div className="option-one">
              <button></button>
              <p>Stay Signed In</p>
            </div>
            <div className="option-two">
              <p>Forgot your password?</p>
            </div>
          </div>

          <div id="four" className="form-row">
            <button type="submit" onClick={this.handleLogin}>Sign In</button>
          </div>


          <div className="divider">

            <p className="divider-trouble">Trouble Signing In?</p>

            <div className="divider-or">OR</div>

          </div>



        </div>





        <div className="half-two">

          <button className="continue-button-one">
            <div className="button-content">
              <i className="fa fa-google"></i>
              <p>Continue With Google</p>
            </div>
          </button>

          <button className="continue-button-two">
            <div className="button-content">
              <i className="fa fa-facebook"></i>
              <p>Continue With Facebook</p>
            </div>
          </button>

          <div className="warning">
            <p>Warning text about stuff Warning text about stuff Warning text about stuff Warning text about stuff Warning text about stuff</p>
          </div>

        </div>

      </form>
    );
  }

}

export default UserLogin;

// r b