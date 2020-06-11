import React from 'react';

import RegisterFormContainer from './register_form_container'
import SessionFormInfo from '../session_form_info';

class Register extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='register-container'>
        <RegisterFormContainer/>
        <SessionFormInfo type={'register'}/>
      </div>
    )
  }
}
export default Register;