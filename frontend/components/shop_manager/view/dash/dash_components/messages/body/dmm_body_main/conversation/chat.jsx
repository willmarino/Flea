import React from 'react';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.messagesByDate = null;
  }
  componentDidMount(){
    let { conversation, currentUserId } = this.props;
    let messages = {}
    conversation.messages.forEach((c) => {
      return { sender: (JSON.parse(c).sender_id === currentUserId), body: JSON.parse(c).body };
    });

  }
  render(){

    return(
      <div className='chat'>

      </div>
    )
  }
}

export default Chat;