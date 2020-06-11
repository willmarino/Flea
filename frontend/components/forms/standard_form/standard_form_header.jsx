import React from 'react';
import { withRouter } from 'react-router-dom';
import BorderedNavButton from '../../buttons/bordered_nav_button';

const StandardFormHeader = (props) => {
  let { headerMessage, navFunction, buttonMessage } = props;
  let button;
  if(navFunction){
    button = <BorderedNavButton message={buttonMessage} navFunction={navFunction}/>
  }else{
    button = <p></p>;
  }
  return(
    <div className='standard-form-header-container'>
      <p id='standard-form-header-message'>{headerMessage}</p>
      {button}
    </div>
  )
}

export default withRouter(StandardFormHeader);