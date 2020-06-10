import React from 'react';
import { withRouter } from 'react-router-dom';
import Login from './login_and_register/login/login';
// import UserLoginContainer from '../users/user_login_container';
// import UserFormContainer from '../users/user_form_container';


const SessionModal = (props) => {
  let { history } = props;
  let res;
  if(history.location.pathname === '/anon/login'){
    res = <Login/>
  }else if(history.location.pathname === '/anon/register'){
    res = <Register/>
  }
  return(
    <div className="modal-background" onClick={() => history.push('/anon')}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {res}
      </div>
    </div>
  );
}

export default withRouter(SessionModal);