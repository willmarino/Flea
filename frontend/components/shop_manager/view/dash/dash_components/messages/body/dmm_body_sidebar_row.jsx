import React from 'react';

const DMMBodySidebarRow = (props) => {
  let classNames = "DMM-body-sidebar-row";
  if(props.focused){
    classNames += " DMM-body-sidebar-row-focused"
  }
  return(
    <div className={classNames} onClick={props.setFilter(props.val)}>
      <p>{props.val}</p>
    </div>
  )
}

export default DMMBodySidebarRow;