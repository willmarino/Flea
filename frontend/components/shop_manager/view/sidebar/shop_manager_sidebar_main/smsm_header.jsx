import React from 'react';
import SMSMHeaderModal from './smsm_header_modal';
import { GiShop } from 'react-icons/gi';
import { BsArrowDownShort } from 'react-icons/bs';

class SMSMHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      modalShowing: false
    }
  }
  render(){
    let modal = (this.state.modalShowing) ? <SMSMHeaderModal/> : null;
    return(
      <div className='SMSM-header' onClick={() => {this.setState({modalShowing: !this.state.modalShowing})}}>
        <GiShop/>
        <p>Shop Manager</p>
        <BsArrowDownShort/>
        {modal}
      </div>
    )
  }
}

export default SMSMHeader;