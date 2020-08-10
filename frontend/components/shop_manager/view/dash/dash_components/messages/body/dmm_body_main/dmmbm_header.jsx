import React from 'react';
import DMMBMHeaderButton from './dmmbm_header_button';
import CustomCheckbox from '../../../../../../../buttons/custom_checkbox';

const DMMBMHeader = (props) => {
  return(
    <div className='dmmbm-header-container'>
      <CustomCheckbox/>
      <DMMBMHeaderButton text={"Trash"}/>
      <DMMBMHeaderButton text={"Mark Unread"}/>
      <DMMBMHeaderButton text={"Mark Read"}/>
      <DMMBMHeaderButton text={"Mark as Spam"}/>
      <DMMBMHeaderButton text={"Archive"}/>
      <DMMBMHeaderButton text={"Label"}/>
    </div>
  )
}

export default DMMBMHeader;