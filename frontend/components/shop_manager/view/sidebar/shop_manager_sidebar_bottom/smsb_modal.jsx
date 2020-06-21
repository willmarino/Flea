import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SMSBModal = () => {
  return(
    <CSSTransition in={true} classNames={'fast-fade'} appear={true} timeout={750}>
      <div className='smsb-modal-container'>
        <p>Account Information</p>
        <p>Your Profile</p>
        <p>Sign Out</p>
      </div>
    </CSSTransition>
  )
}

export default SMSBModal;