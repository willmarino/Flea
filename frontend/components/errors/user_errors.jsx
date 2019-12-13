import React from 'react';

class UserErrors extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="user-errors">{this.props.userErrors}</div>
    );
  }
}

export default UserErrors;