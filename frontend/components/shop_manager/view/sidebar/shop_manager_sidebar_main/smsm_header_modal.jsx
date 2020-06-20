import React from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { GiShop } from 'react-icons/gi';

const SMSMHeaderModal = (props) => {
  let { history } = props;
  return(
    <CSSTransition in={true} classNames='fast-fade' appear={true} timeout={1500}>
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
    </CSSTransition>
  )
}

export default withRouter(SMSMHeaderModal);