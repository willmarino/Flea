import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionFormHeader from '../../../../forms/standard_form/standard_form_header';
import StandardFormInput from '../../../../forms/standard_form/standard_form_input';
import LoginMid from './login_mid';
import StandardSubmitButton from '../../../../forms/standard_form/standard_submit_button';

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
    this.update = this.update.bind(this);
  }
  handleSubmit(e){
    let { loginUser } = this.props;
    let { credentials } = this.state;
    loginUser(credentials);
  }
  update(field){
    return (e) => {
      debugger;
      let credentials = this.state.credentials;
      credentials[field] = e.currentTarget.value;
      this.setState({ credentials });
    }
  }
  render(){
    let { history, errors } = this.props;
    let { credentials } = this.state;
    let inputForms = Object.keys(credentials).map((inputName) => {
      return (
        <StandardFormInput
          value={credentials[inputName]}
          updateFunc={this.update(inputName)}
          label={inputName}
          hidden={inputName === 'password'}/>)
    })
    return(
      <div id='login-form' className='standard-form-container'>
        <SessionFormHeader
          navButton={true}
          navFunction={() => history.push('/anon/register')}
          headerMessage='Sign In'/>
        {inputForms}
        <LoginMid/>
        <StandardSubmitButton/>
      </div>
    )
  }
}

export default withRouter(LoginForm);