import React from 'react';
import DMMessagesSearchbarContainer from './dm_messages_searchbar_container';
import MainModalContainer from '../../../../../../modal/main_modal_container';

class DMMessagesHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let { openModal } = this.props;
    return(
      <div className="SMM-header">
        <MainModalContainer/>
        <div className="SMM-header-left">
          <p>Messages</p>
          <DMMessagesSearchbarContainer/>
        </div>
        <div className="SMM-header-options">

          <div className="SMM-header-op-1">
            <p>Auto-reply</p>
            <div className="SMM-header-op-1-2">
              <p>Off</p>
            </div>
          </div>

          <div className="SMM-header-op-2" onClick={() => { openModal('message') }}>
            <p>Compose</p>
          </div>

        </div>
      </div>
    )
  }
}

export default DMMessagesHeader;