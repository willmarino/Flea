import React from 'react';
import SMSMHeaderModal from './smsm_header_modal';
import { GiShop } from 'react-icons/gi';
import { BsArrowDownShort } from 'react-icons/bs';

const SMSMHeader = () => {
  return(
    <div className='SMSM-header'>
      <GiShop/>
      <p>Shop Manager</p>
      <BsArrowDownShort/>
      <SMSMHeaderModal/>
    </div>
  )
}

export default SMSMHeader;