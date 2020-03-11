import React from 'react';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let { users, curId, fetchUserById, fetchFavorites } = this.props;
    if(!Object.keys(users).includes(curId)){
      fetchUserById(curId)
        .then(() => {
          fetchFavorites(curId);
        })
    }else{
      fetchFavorites(curId);
    }
  }

  render(){
    // if()
    return <p></p>;
  }
}

export default UserProfile;