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
    this.props.loginUser(this.state);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  render(){
    return(
      <div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <label> Username
            <input type="text" onChange={this.update('username')} value={this.state.username}/>
          </label>
          <br/>
          <label> Password
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <br/>
          <label> Email
            <input type="text" onChange={this.update('email')} value={this.state.email} />
          </label>
          <br/>
          <label> Tell Us About Yourself
            <input type="text" onChange={this.update('description')} value={this.state.description} />
          </label>  
          <br />
          <label>Location
            <input type="text" onChange={this.update('location')} value={this.state.location} />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }

}

export default UserForm;