import React from 'react';

class UserLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;

    this.errors = {
      username: null,
      password: null
    };
    

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleLogin(e){
    // e.preventDefault();
    // if (this.state.username.length === 0) {
    //   this.errors.username = "Username Can't Be Blank";
    // } else if (this.state.password.length < 6) {
    //   this.errors.password = "Password Was Incorrect";
    // } else {
    //   this.props.loginUser(this.state);
    // }
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


    // let userErrors = null;
    // let passwordErrors = null;

    // if (this.errors.username) {
    //   userErrors = <p>{this.errors.username}</p>;
    // }
    // if (this.errors.username) {
    //   passwordErrors = <p>{this.errors.username}</p>;
    // }



    return(
      <form className="modal-form" >
        <div className="half-one">
          <div id="one" className="form-row">
            <div>Sign In</div>
            <button type="button" onClick={this.handleSwitch}>Register</button>
          </div>

          <div id="two" className="form-row">
            {/* <label> Username */}
              <p>Username</p>
              <input className="login-input" type="text" onChange={this.update('username')} value={this.state.username}/>
              {/* {userErrors} */}
            {/* </label> */}
          </div>

          <div id="three" className="form-row">
            {/* <label> Password */}
              <p>Password</p>
              <input className="login-input" type="password" onChange={this.update('password')} value={this.state.password}/>
              {/* {passwordErrors} */}
            {/* </label> */}
          </div>

          <div className="login-options">
            <div className="option-one">
              {/* <i class="far fa-square fa-2x"></i> */}
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

          {/* <div className="continue-button-one">
            <i className="fa fa-google"></i>
            <button>Continue With Google</button>
          </div> */}

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