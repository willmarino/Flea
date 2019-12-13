import React from 'react';

class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user;
    

    this.errors = {
      username: null,
      password: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.username.length === 0){
      this.errors.username = "Username Can't Be Blank";
    }else if(this.state.password.length < 6){
      this.errors.password = "Password Was Incorrect";
    }else{
      this.props.signupUser(this.state);
    }
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  render(){

    // let userErrors = null;
    // let passwordErrors = null;

    // if(this.errors.username){
    //   userErrors = <p>{this.errors.username}</p>;
    // }
    // if(this.errors.username){
    //   passwordErrors = <p>{this.errors.username}</p>;
    // }

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
          </div>
          <div className="signup-form-row" id="signup-four">
              <p>Password</p>
              <input className="signup-input" type="password" onChange={this.update('password')} value={this.state.password} />
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