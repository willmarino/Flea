import React from 'react';

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
    


    return(
      <form className="modal-form" onSubmit={this.handleSubmit}>
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
      </form>
    )
  }

}

export default UserForm;