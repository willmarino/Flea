import { Link } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e){

  // }

  render(){
    let path = `/anon/products/${this.props.product.id}`;
    return (
      <li>
        <Link to={path}>{this.props.product.name}</Link>
      </li>
    )
  }
}

export default IndexItem;