import React from 'react';

class BorderedNavButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let { message, navFunction } = this.props;
    return(
      <div className='bordered-nav-button' onClick={navFunction}>
        <p>{message}</p>
      </div>
    )
  }
}

export default BorderedNavButton;