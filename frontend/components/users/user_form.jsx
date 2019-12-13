import React from 'react';
import UserErrors from '../errors/user_errors_container';

class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signupUser(this.state);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  render(){

    let passErrors;
    let userErrors;

    if(this.props.errors.includes("password") || this.props.errors.includes("Password")){
      passErrors = <UserErrors/>;
    } else{
      userErrors = <UserErrors/>;
    }

    return(
      <form className="modal-form" onSubmit={this.handleSubmit}>

        <div className="signup-half-one">
          <div className="signup-form-row" id="signup-one">
            <div className="create-account">Create your account</div>
            <p className="registration-account">Registration is easy.</p>
          </div>
          <div className="signup-form-row" id="signup-two">
              <p>Email</p>
              <input className="signup-input" type="text" onChange={this.update('email')} value={this.state.email} />
          </div>
          <div className="signup-form-row" id="signup-three">
              <p>Username</p>
              <input className="signup-input" type="text" onChange={this.update('username')} value={this.state.username}/>
              {userErrors}
          </div>
          <div className="signup-form-row" id="signup-four">
              <p>Password</p>
              <input className="signup-input" type="password" onChange={this.update('password')} value={this.state.password} />
              {passErrors}
          </div>
          <div className="signup-form-row" id="signup-five">
            <button className="signup-input" type="submit">Register</button>
          </div>


          <div className="divider">

            <div className="signup-divider-or">OR</div>

          </div>



        </div>

        <div className="signup-half-two">

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
    )
  }

}

export default UserForm;