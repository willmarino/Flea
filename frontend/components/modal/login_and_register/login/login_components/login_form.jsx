import React from 'react';
import { withRouter } from 'react-router-dom';
import StandardFormHeader from '../../../../forms/standard_form/standard_form_header';
import StandardFormInput from '../../../../forms/standard_form/standard_form_input';
import StandardSubmitButton from '../../../../forms/standard_form/standard_submit_button';
import LoginMid from './login_mid';

import { update } from '../../../../forms/standard_form/form_util';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        username: '',
        password: ''
      }
    }
  }

  render(){
    let { history, errors, loginUser } = this.props;
    let { info } = this.state;

    let inputForms = Object.keys(info).map((inputName) => {
      return(
        <StandardFormInput value={info[inputName]} updateFunc={update(inputName, this)} label={inputName}/>)
    })
    return(
      <div id='login-form' className='standard-form-container'>
        <StandardFormHeader navFunction={() => history.push('/anon/register')} headerMessage='Sign In'/>
        {inputForms}
        <LoginMid/>
        <StandardSubmitButton submitMessage={'Login'} submitFunc={loginUser} info={info}/>
      </div>
    )
  }
}

export default withRouter(LoginForm);