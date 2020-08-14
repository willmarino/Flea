import React from 'react';

const ChatSection = (props) => {
  let { date, messages } = props;
  let messagesList = messages.map((m) => {
    return <li>{m}</li>;
  });
  return(
    <div className="chat-section">
      <p>{date}</p>
      {messagesList}
    </div>
  )
}

export default ChatSection;