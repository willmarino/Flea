import React from 'react';
import CustomCheckbox from '../../../../../../../../buttons/custom_checkbox';
import { getOtherUserId, getLastMessage, numMessages, getPrettyDate } from '../../../../../../../../../helpers/conversation_helpers';

class ConversationBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      otherUserId: null
    }
  }
  componentDidMount(){
    let { fetchUserById, conversation, currentUserId } = this.props;
    debugger;
    let otherUserId = getOtherUserId(conversation, currentUserId);
    fetchUserById(otherUserId)
      .then(() => {
        this.setState({ otherUserId: otherUserId });
      })
  }
  render(){
    let { users, conversation } = this.props;
    if(!this.state.otherUserId){
      return null;
    }else{
      let otherUser = users[this.state.otherUserId];
      return(
        <div className="conversation-bar-container">
          <div className='cb-one'>
            <CustomCheckbox/>
            <img src={otherUser.photoURL} alt=""/>
            <div className='cb-one-text'>
              <p id='cbot-one'>{otherUser.username}</p>
              <p>{getLastMessage(conversation)}</p>
            </div>
          </div>
          <div className='cb-two'>
            <div id='cb-two-length'>
              <p>{numMessages(conversation)}</p>
            </div>
            <p>{getPrettyDate(conversation)}</p>
          </div>
        </div>
      )
    }

  }
}

export default ConversationBar;