import React from 'react';

const SessionFormInput = (props) => {
  let { update, currentValue, errors, hidden } = props;
  return(
    <div className='form-input-container'>
      <input className='form-input' type={hidden ? 'password' : 'text'} onChange={update} value={currentValue}/>
      <p className='form-error-message'>{errors}</p>
    </div>
  )
}

export default SessionFormInput;