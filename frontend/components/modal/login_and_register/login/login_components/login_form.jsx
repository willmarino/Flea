import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionFormHeader from '../../../../forms/standard_form/standard_form_header';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.update = this.update.bind(this);
  }
  
  // handleSubmit(e){
  //   let { loginUser } = this.props;
  //   let { info } = this.state;
  //   loginUser(info);
  // }

  // update(field){
  //   return (e) => {
  //     debugger;

  //     // let credentials = this.state.credentials;
  //     // credentials[field] = e.currentTarget.value;
  //     // this.setState({ credentials });

  //     let fieldToBeEdited = this.state.info[field];
  //     debugger;
  //     this.setState({ [fieldToBeEdited] : e.currentTarget.value });
  //   }
  // }
  render(){
    let { history, errors, loginUser } = this.props;
    let { info } = this.state;
    // this.update = this.update.bind(this);

    let inputForms = Object.keys(info).map((inputName) => {
      return (
        <StandardFormInput value={info[inputName]} updateFunc={update(inputName, this)} label={inputName}/>)
        // updateFunc={this.update(inputName)}
          // hidden={inputName === 'password'}
    })
    return(
      <div id='login-form' className='standard-form-container'>
        <SessionFormHeader navButton={true} navFunction={() => history.push('/anon/register')} headerMessage='Sign In'/>
        {inputForms}
        <LoginMid/>
        <StandardSubmitButton submitMessage={'Login'} submitFunc={loginUser} info={info}/>
      </div>
    )
  }
}

export default withRouter(LoginForm);