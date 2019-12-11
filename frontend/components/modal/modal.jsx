import React from 'react';
import UserLoginContainer from '../users/user_login_container';
import UserFormContainer from '../users/user_form_container';

class Modal extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    if(!this.props.modal){
      return null;
    }
    let res;
    switch(this.props.modal){
      case 'login':
        res = <UserLoginContainer/>;
        break;
      case 'sign up':
        res = <UserFormContainer/>;
        break;
      default:
        return null;
    }
    // debugger;
    return(
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          {res}
        </div>
      </div>
    );
  }
}

export default Modal;