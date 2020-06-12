import React from 'react';
import Login from './login_and_register/login/login';
import Register from './login_and_register/register/register';

const SessionModal = (props) => {
  let { modalStatus, closeModal } = props;
  if(!modalStatus || modalStatus === 'none'){
    return null;
  }
  let res;
  if(modalStatus === 'login'){
    res = <Login/>
  }else if(modalStatus === 'register'){
    res = <Register/>
  }
  return(
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {res}
      </div>
    </div>
  );
}

export default SessionModal;