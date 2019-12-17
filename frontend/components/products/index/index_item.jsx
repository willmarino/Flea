import { Link, Redirect, withRouter } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e){
  //   e.preventDefault();
  // }

  render(){
    let path = `/anon/products/${this.props.product.id}`;
    let item;

    if(this.props.type === "simple"){
      item = (
        <li className="simple">
          <Link to={path} >
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>

            <p>{this.props.product.price}</p>
        </li>
      )
    }else if(this.props.type === "complex"){
      item = (
        <li className="complex">
          <Link to={path}>
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
            <p>{this.props.product.name}</p>
            <p>{this.props.shop.name}</p>
            <p>Rating</p>
            <p>{this.props.product.price}</p>
        </li>
      )
    }

    return (
      item
    );
  }
}

export default IndexItem;