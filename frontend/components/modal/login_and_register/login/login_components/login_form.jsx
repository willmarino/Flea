import React from 'react';
import SessionFormInput from '../../common/session_form_input';
import SubmitButton from '../../common/submit_button';
import BorderedNavButton from '../../../../buttons/bordered_nav_button';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }
  handleSubmit(e){
    let { loginUser } = this.props;
    let { credentials } = this.state;
    loginUser(credentials);
  }
  update(field){
    return (e) => {
      let credentials = this.state.credentials;
      credentials[field] = e.currentTarget.value;
      this.setState({ credentials });
    }
  }
  render(){
    let { openModal } = this.props;
    return(
      <div id='login-form' className='form-container'>
        <div className='login-form-header'>
          <p>Login</p>
          {/* <BorderedNavButton message={'Registration'} navAction={() => }/> */}
        </div>
        <SessionFormInput update={this.update('username')} hidden={false}/>
        <SessionFormInput update={this.update('password')} hidden={true}/>
        <SubmitButton submit={this.handleSubmit} message={'login'}/>
      </div>
    )
  }
}

export default withRouter(LoginForm);