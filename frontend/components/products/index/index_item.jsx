import { Link, Redirect, withRouter } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  render(){
    let path = `/anon/products/${this.props.product.id}`;
    // let shop = this.props.shops[this.props.product.shop_id];
    let item;

    if(this.props.type === "simple"){
      item = (
        <li className="simple">
          <Link to={path}>
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>

            <p>{this.props.product.price}</p>
        </li>
      )
    }else if(this.props.type === "complex"){
      // debugger;
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