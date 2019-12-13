import React from 'react';

class SessionErrors extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="errors">{this.props.sessionErrors}</div>
    );
  }

}

export default SessionErrors;