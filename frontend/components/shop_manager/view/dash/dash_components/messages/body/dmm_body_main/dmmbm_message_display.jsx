import React from 'react';
import ConversationBarContainer from './conversation_bar/conversation_bar_container';

class DMMBMMessageDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fetched: false
    }
  }
  componentDidMount(){
    let { fetchConversations, currentUser } = this.props;
    fetchConversations(currentUser.id)
      .then(() => {
        this.setState({ fetched: true });
      })
  }
  render(){
    let { conversations } = this.props;
    if(!this.state.fetched){
      return null;
    }
    let convoBars = Object.values(conversations).map((c) => {
      return <ConversationBarContainer conversation={c} key={c.id}/>
    })
    return(
      <div className="dmmbm-message-display">
        {convoBars}
      </div>
    )
  }
}

export default DMMBMMessageDisplay;