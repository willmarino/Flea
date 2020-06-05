import React from 'react';
// import UserLoginContainer from '../users/user_login_container';
import Login from './login_and_register/login/login';
import UserFormContainer from '../users/user_form_container';

// class Modal extends React.Component{
//   constructor(props){
//     super(props);

//   }

const SessionModal = (props) => {

  // render(){

    // if(!this.props.modal){
    //   return null;
    // }
    // let res;
    // switch(this.props.modal){
    //   case 'login':
    //     // res = <UserLoginContainer />;
    //     res = <Login/>
    //     break;
    //   case 'sign up':
    //     res = <UserFormContainer/>;
    //     break;
    //   default:
    //     return null;
    // }
    let { history } = this.props;
    let res;
    if(history.location.pathname === 'anon/login'){
      res = <Login/>
    }
    return(
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {res}
        </div>
      </div>
    );
  // }
}

export default withRouter(Modal);