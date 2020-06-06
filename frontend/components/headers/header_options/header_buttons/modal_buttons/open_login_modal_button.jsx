import React from 'react';
import { withRouter } from 'react-router-dom';

class OpenLoginModalButton extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let { history } = this.props;
    history.push('/anon/login');

  }
  render(){
    return(
      <div className="header-button" onClick={this.handleClick}>
        <p>Sign In</p>
      </div>
    )
  }
}

export default withRouter(OpenLoginModalButton);