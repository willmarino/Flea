import { Link, Redirect, withRouter } from 'react-router-dom';
import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  starsify(n){
    let stars = [];
      while(stars.length < n){
        stars.push(<i className="fa fa-star" key={stars.length}></i>)
      }
    return stars;
  }


    render(){

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
          <Link to={path} className="link-container" >
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels-simple">
            <div className="item-price">
              <i className="fa fa-euro-sign"></i>
              <p>${this.props.product.price}</p>
            </div>
            {/* {widgets[Math.round(Math.random())]} */}
          </div>
        </li>
      )
    }else if(this.props.type === "mid"){
      item = (
        <li className="complex">
          <Link to={path}>
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels">
            <div id="item-label-top">
              <p>{this.props.product.name}</p>
              <p>${this.props.product.price}</p>
            </div>
          </div>
        </li>
      )
    }else if(this.props.type === 'complex'){
      item = (
        <li className="complex">
          <Link to={path}>
            <img src={this.props.product.photoURL} alt="" className="index-fake-image" />
          </Link>
          <div className="item-labels">
            <div id="item-label-top">
              <p>{this.props.product.name}</p>
              <p>{this.props.shop.name}</p>
              <p>{this.starsify(Math.round(this.props.product.rating))}</p>
              <p>${this.props.product.price}</p>
            </div>
          </div>
        </li>
      )
    }else if(this.props.type === 'review'){
      item = (
        <li className="review-product-photo-and-link" key={this.props.product.photoURL}>
          <Link to={path} className="link-container" >
            <img src={this.props.product.photoURL} alt="" className="review-product-photo" />
          </Link>
        </li>
      )
    }else if(this.props.type === 'cart'){
      item = (
        <li className="cart-product-photo-and-link" key={this.props.product.photoURL}>
          <Link to={path} className="link-container" >
            <img src={this.props.product.photoURL} alt="" className="cart-show-product-image" />
          </Link>
        </li>
      )
    }else if(this.props.type === 'cart-recommended'){
      item = (
        <li className="cart-show-recommended-product-link" key={this.props.product.photoURL}>
          <Link to={path} className="link-container" >
            <img src={this.props.product.photoURL} alt="" className="cart-show-recommended-product-image" />
          </Link>
          <p>{this.props.product.name}</p>
          <p>{this.props.shop.name}</p>
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