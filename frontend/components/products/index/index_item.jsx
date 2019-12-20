import { Link, Redirect, withRouter } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);
  }



    render(){
    // let percentOff = Math.round(Math.random() * 50) + 10;

    let widgets = [<div className="bestseller"><p>Bestseller</p></div>, <div className="on-sale"><p>Free Shipping</p></div>]
    let path;
    if(!this.props.loggedIn){
      path = `/anon/products/${this.props.product.id}`;
    }else{
      path = `/products/${this.props.product.id}`;
    }
    let item;

    if(this.props.type === "simple"){
      item = (
        <li className="simple">
          <Link to={path} >
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels-simple">
            <div className="item-price">
              {/* <i className="fas fa-dollar-sign"></i> */}
              <i className="fa fa-euro-sign"></i>
              <p>${this.props.product.price}</p>
            </div>
            {widgets[Math.round(Math.random())]}
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
            <div id="item-label-top">
              <p>${this.props.product.price}</p>
              <p>{this.props.product.name}</p>
            </div>
            <p>{this.props.shop.name}</p>
            <p>{this.props.product.rating}</p>
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