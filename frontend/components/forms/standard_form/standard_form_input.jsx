import React from 'react';

const StandardFormInput = (props) => {
  let { updateFunc, value, errors, label } = props;
  return(
    <div className='standard-form-input-container'>
      <p className='standard-form-input-header'>{label[0].toUpperCase() + label.slice(1)}</p>
      <input className='standard-form-input' type={(label === 'password') ? 'password' : 'text'} onChange={updateFunc} value={value}/>
      <p className='standard-form-error-message'>{errors}</p>
    </div>
  )
}

export default StandardFormInput;