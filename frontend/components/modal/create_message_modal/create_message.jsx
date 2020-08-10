import React from 'react';

class CreateMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        recipient: '',
        subject: '',
        body: ''
      },
      errors: {

      }
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field){
    return (e) => {
      let info = this.state.info;
      info[field] = e.currentTarget.value;
      this.setState({ info });
    }
  }
  handleSubmit(){
    let { createMessage } = this.props;
    let { info } = this.state;
    createMessage(info);
  }
  render(){
    return(
      <div className='create-message-container'>
        <div className="message-creation-one">
          <p className="message-creation-header">New Message</p>
          <input placeholder="Recipient" type="text" className="message-creation-input" value={this.state.info.receiver} onChange={this.update("recipient")}/>
          <input placeholder="Subject" type="text" className="message-creation-input" value={this.state.info.subject} onChange={this.update("subject")}/>
          <textarea placeholder="Message" className="message-creation-input" id="tall-message-creation-input" value={this.state.info.message} onChange={this.update("body")}/>
        </div>
        <div className="message-creation-two">
          <button id="cmb-one"><p id="cmb-one-text">Cancel</p></button>
          <button id="cmb-two" onClick={this.handleSubmit}><p id="cmb-two-text">Send</p></button>
        </div>
      </div>
    )
  }
}

export default CreateMessage;