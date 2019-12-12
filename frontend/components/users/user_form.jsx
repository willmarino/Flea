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
            <div>Create your account</div>
            <p>Registration is easy.</p>
          </div>
          <div className="signup-form-row" id="signup-two">
            <label> Email
              <input type="text" onChange={this.update('email')} value={this.state.email} />
            </label>
          </div>
          <div className="signup-form-row" id="signup-three">
            <label> Username
              <input type="text" onChange={this.update('username')} value={this.state.username}/>
            </label>
          </div>
          <div className="signup-form-row" id="signup-four">
            <label> Password
              <input type="password" onChange={this.update('password')} value={this.state.password} />
            </label>
          </div>
          <div className="signup-form-row" id="signup-five">
            <button type="submit">Register</button>
          </div>
        </div>

        <div className="signup-half-two">
          <div className="continue-button-one">
            <i className="fa fa-google"></i>
            <button>Continue With Google</button>
          </div>

          <div className="continue-button-one">
            <i className="fa fa-facebook"></i>
            <button>Continue With Facebook</button>
          </div>

          <div className="">
            <p>Warning text about stuff Warning text about stuff Warning text about stuff Warning text about stuff Warning text about stuff</p>
          </div>

        </div>

      </form>
    )
  }

}

export default UserForm;