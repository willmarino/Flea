import React from 'react';
import LoginFormContainer from './login_components/login_form_container';
import LoginFormInfo from './login_components/login_form_info';

class Login extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className='login-container'>
      <LoginFormContainer/>
      <LoginFormInfo/>
    </div>
    )
  }
}

export default Login;