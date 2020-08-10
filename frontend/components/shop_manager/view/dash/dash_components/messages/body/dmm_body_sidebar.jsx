import React from 'react';
import DMMBodySidebarRow from './dmm_body_sidebar_row';

const DMMBodySidebar = (props) => {
  let rows = ['Inbox', 'Sent', 'All', 'Unread', 'Spam', 'Trash'].map((el) => {
    let focused = (props.curFilter === el);
    return <DMMBodySidebarRow setFilter={props.setFilter} val={el} focused={focused} key={el}/>
  })
  return(
    <div className="DMM-body-sidebar-container">
      {rows}
    </div>
  )
}

export default DMMBodySidebar;