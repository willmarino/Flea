import React from 'react';
import { withRouter } from 'react-router-dom';

class CartNavButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // this.props.history.push('/cart')
  }
  render(){
    return(
      <div onClick={this.handleClick} className="header-button">
        <i className="fa fa-shopping-cart"></i>
      </div>
    );
  }
}

export default withRouter(CartNavButton);