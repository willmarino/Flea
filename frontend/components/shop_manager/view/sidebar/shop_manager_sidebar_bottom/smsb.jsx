import React from 'react';
import SMSBModal from './smsb_modal';
import { BsArrowUpShort, BsArrowLeftRight } from 'react-icons/bs';

class SMSB extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalStatus: false
    }
  }
  render(){
    let { user } = this.props;
    let modal = null;
    if(this.state.modalStatus){
      modal = <SMSBModal/>
    }
    return(
      <div className='SMSB-container'>
        <div className='SMSB-user-interactor' onClick={() => { this.setState({ modalStatus: !this.state.modalStatus }) }}>
          <div className='SMSB-user-interactor-info'>
            <img src={user.photoURL} alt=""/>
            <p>{user.username}</p>
          </div>
          <div className='SMSB-icon-left'>
            <BsArrowUpShort/>
          </div>
        </div>
        <div className='SMSB-icon-right'>
          <BsArrowLeftRight/>
        </div>
        {modal}
      </div>
    )
  }
}

export default SMSB;