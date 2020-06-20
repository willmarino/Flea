import React from 'react';
import { withRouter } from 'react-router-dom';
import { GiShop } from 'react-icons/gi';

const SMSMHeaderModal = (props) => {
  let { history } = props;
  return(
    <div className="SMSM-header-modal">
      <div className='SMSM-header-modal-row' id="SMSMHM-top-row">
        <p>Go To</p>
      </div>
      <div onClick={() => { history.push('/shops-manager/dashboard') }} className='SMSM-header-modal-row'>
        <GiShop/>
        <p className="SMSM-header-modal-row-message">Shop Manager</p>
      </div>
      <div onClick={() => { history.push('/') }} className='SMSM-header-modal-row'>
        <div className='makeshift-etsy-icon'><p>E</p></div>
        <p className="SMSM-header-modal-row-message">Etsy</p>
      </div>
    </div>
  )
}

export default withRouter(SMSMHeaderModal);