import { Link, Redirect, withRouter } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let path = `/anon/products/${this.props.product.id}`;
    let item;

    if(this.props.type === "simple"){
      item = (
        <li className="simple">
          <Link to={path} >
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels">
            <p>{this.props.product.price}</p>
          </div>
        </li>
      )
    }else if(this.props.type === "complex"){
      item = (
        <li className="complex">
          <Link to={path}>
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels">
            <p>{this.props.product.name}</p>
            <p>{this.props.shop.name}</p>
            <p>{this.props.product.rating}</p>
            <p>{this.props.product.price}</p>
          </div>
        </li>
      )
    }

    return (
      item
    );
  }
}

export default IndexItem;