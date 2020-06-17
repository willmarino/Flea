import React from 'react';

const ActionSuccessModal = (props) => {
  let { message } = props;
  return(
    <div className='action-success-modal-container'>
      <p>{message}</p>
    </div>
  )
}

export default ActionSuccessModal;