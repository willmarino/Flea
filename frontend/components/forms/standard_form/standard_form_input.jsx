import React from 'react';

const StandardFormInput = (props) => {
  let { updateFunc, value, errors, label, hidden } = props;
  return(
    <div className='standard-form-input-container'>
      <p className='standard-form-input-header'>{label}</p>
      <input className='standard-form-input' type={hidden ? 'password' : 'text'} onChange={updateFunc} value={value}/>
      <p className='standard-form-error-message'>{errors}</p>
    </div>
  )
}

export default StandardFormInput;