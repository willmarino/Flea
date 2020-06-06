import React from 'react';
import StandardFormInput from './standard_form_input';
import StandardSubmitButton from './standard_submit_button';

const StandardFormBody = (props) => {
  let { inputs, submitMessage, updateFunc, values, submitFunc, extra } = props;
  let inputForms = inputs.map((inputName, i) => {
    return (
      <StandardFormInput
        value={values[i]}
        updateFunc={updateFunc(inputName)}
        label={inputName}
        hidden={inputName === 'password'}/>)
  })
  return(
    <div className='standard-form-body-container'>
      {inputForms}
      <StandardSubmitButton submitFunc={submitFunc} submitMessage={submitMessage}/>
    </div>
  )
}

export default StandardFormBody;