import React from 'react';
import Chat from './chat';
import ChatFooter from './chat_footer';
import ConversationSidebar from './conversation_sidebar';

const Conversation = () => {
  return(
    <div className='conversation-container'>
      <div>
        <Chat/>
        <ChatFooter/>
      </div>
      <div>
        <ConversationSidebar/>
      </div>
    </div>
  )
}

export default Conversation;