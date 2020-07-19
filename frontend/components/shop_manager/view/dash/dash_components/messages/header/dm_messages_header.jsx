import React from 'react';

class DMMessagesHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="SMM-header">
        <div className="SMM-header-left">
          <p>Messages</p>
          {/* search */}
        </div>
        <div className="SMM-header-options">

          <div className="SMM-header-op-1">
            <p>Auto-reply</p>
            <div className="SMM-header-op-1-2">
              <p>Off</p>
            </div>
          </div>

          <div className="SMM-header-op-2">
            <p>Compose</p>
          </div>

        </div>
      </div>
    )
  }
}

export default DMMessagesHeader;