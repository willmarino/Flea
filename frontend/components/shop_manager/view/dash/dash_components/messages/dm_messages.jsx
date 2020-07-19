import React from 'react';
import DMMessagesHeader from './header/dm_messages_header';

class DMMessages extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="DMM-container">
        <DMMessagesHeader/>
      </div>
    )
  }
}

export default DMMessages;