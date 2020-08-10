import React from 'react';
import DMMBodySidebar from './dmm_body_sidebar';
import DMMBodyMain from './dmm_body_main/dmm_body_main';


class DMMessagesBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messageFilter: 'Inbox'
    }
    this.setFilter = this.setFilter.bind(this);
  }
  setFilter(val){
    let func = (e) => {
      this.setState({ messageFilter: val });
    }
    return func.bind(this);
  }
  render(){
    return(
      <div className="DMM-body">
        <DMMBodySidebar setFilter={this.setFilter} curFilter={this.state.messageFilter}/>
        <DMMBodyMain/>
      </div>
    )
  }
}

export default DMMessagesBody;