import React from 'react';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let { users, curId, fetchUserById, fetchFavorites } = this.props;
    if(!Object.keys(users).includes(curId)){
      debugger;
      fetchUserById(curId)
        .then(() => {
          debugger;
          fetchFavorites(curId);
        })
    }else{
      debugger;
      fetchFavorites(curId);
    }
  }

  render(){
    // if()
    return <p></p>;
  }
}

export default UserProfile;