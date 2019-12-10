import React from 'react';
import User from './user';

class UsersIndex extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    // debugger
    let usersArr = this.props.users.map((user) => {
      return <User user={user}/>
    });
    return(
      <ul>
        {usersArr}
      </ul>
    );
  }
}

export default UsersIndex;