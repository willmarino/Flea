import React from 'react';
import User from './user_show';

class UsersIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    let usersArr = this.props.users.map((user) => {
      return <User user={user} key={user.id}/>
    });
    return(
      <ul>
        {usersArr}
      </ul>
    );
  }
}

export default UsersIndex;