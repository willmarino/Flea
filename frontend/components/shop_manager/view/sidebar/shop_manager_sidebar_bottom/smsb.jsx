import React from 'react';
import { BsArrowUpShort, BsArrowLeftRight } from 'react-icons/bs';

class SMSB extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    let { user } = this.props;
    return(
      <div className='SMSB-container'>
        <div className='SMSB-user-interactor'>
          <div className='SMSB-user-interactor-info'>
            <img src={user.photoURL} alt=""/>
            <p>{user.username}</p>
          </div>
          <BsArrowUpShort/>
        </div>
        <BsArrowLeftRight/>
      </div>
    )
  }
}

export default SMSB;