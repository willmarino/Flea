import React from 'react';

import StandardFormHeader from '../../../forms/standard_form/standard_form_header';
import StandardFormInput from '../../../forms/standard_form/standard_form_input'
import StandardSubmitButton from '../../../forms/standard_form/standard_submit_button';
import LoginMid from '../login/login_components/login_mid';

import { update } from '../../../forms/standard_form/form_util';
import { openModal } from '../../../../actions/modal_actions';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        email: '',
        username: '',
        password: ''
      }
    }
  }
  render(){
    let { openModal, errors, signupUser } = this.props;
    let { info } = this.state;
    debugger;
    let inputForms = Object.keys(info).map((inputName) => {
      return <StandardFormInput value={info[inputName]} updateFunc={update(inputName, this)} label={inputName}/>
    })

    return(
      <div id='register-form' className='standard-form-container'>
        <StandardFormHeader navFunction={() => openModal('login')} buttonMessage={'Login'} headerMessage={'Sign Up'}/>
        {inputForms}
        <StandardSubmitButton submitMessage={'Register'} submitFunc={signupUser} info={info}/>
      </div>
    )
  }
}
export default RegisterForm;