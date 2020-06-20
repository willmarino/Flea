import React from 'react';
import { withRouter } from 'react-router-dom';

const SMSMTab = (props) => {
  let { icon, url, name, history, focused } = props;
  let classes = "SMSM-tab-row";
  if(focused){
    classes += " SMSM-focused-row";
  }
  return(
    <div className={classes} onClick={() => { history.push(url) }}>
      {icon}
      <p className="SMSM-tab-row-name">{name}</p>
    </div>
  )
}

export default withRouter(SMSMTab);