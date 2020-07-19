import React from 'react';
import DMMessagesHeader from './header/dm_messages_header';
import DMMessagesBody from './body/dm_messages_body';

class DMMessages extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="DMM-container">
        <DMMessagesHeader/>
        <DMMessagesBody/>
      </div>
    )
  }
}

export default DMMessages;