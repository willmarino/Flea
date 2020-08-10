import React from 'react';
import DMMessagesHeaderContainer from './header/dm_messages_header_container';
import DMMessagesBody from './body/dm_messages_body';

class DMMessages extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="DMM-container">
        <DMMessagesHeaderContainer/>
        <DMMessagesBody/>
      </div>
    )
  }
}

export default DMMessages;