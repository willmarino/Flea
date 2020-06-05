import React from 'react';

class BorderedNavButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let { message, navAction } = this.props;
    return(
      <div className='bordered-nav-button' onClick={navAction}>
        <p>{message}</p>
      </div>
    )
  }
}

export default withRouter(BorderedNavButton);