import React from 'react';
import Login from './login_and_register/login/login';
import Register from './login_and_register/register/register';
import CreateMessageContainer from './create_message_modal/create_message_container';

const MainModal = (props) => {
  let { modalStatus, closeModal } = props;
  if(!modalStatus || modalStatus === 'none'){
    return null;
  }
  let res;
  let id = null;
  if(modalStatus === 'login'){
    res = <Login/>
  }else if(modalStatus === 'register'){
    res = <Register/>
  }else if(modalStatus === 'message'){
    res = <CreateMessageContainer/>
    id = 'wide-view';
  }
  return(
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" id={id} onClick={e => e.stopPropagation()}>
        {res}
      </div>
    </div>
  );
}

export default MainModal;