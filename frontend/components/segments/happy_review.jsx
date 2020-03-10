import React from 'react';
import { Link } from 'react-router-dom';

class HappyReview extends React.Component{
  constructor(props){
    super(props);

    this.starsify = this.starsify.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.configureDate = this.configureDate.bind(this);
  }

  starsify(num){
    let stars = [];
    for(let i = 0; i < num; i++){
      stars.push(<li key={Math.round(Math.random() * 99)}><i className="fa fa-star"></i></li>)
    }
    return stars;
  }

  capitalize(str){
    let res = str[0].toUpperCase() + str.slice(1);
    return res;
  }

  configureDate(str){
    let months = [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December'
    ];
    let [year, month, day] = str.split('-');
    return `${months[month - 1]} ${day}`

  }

  render(){
    let {user, review, product} = this.props;
    let productShowPath = `/products/${product.id}`;
    if(!this.props.loggedIn) productShowPath = '/anon' + productShowPath;
    return(
      <li className='happy-review' >
        <div className='hr-container-one'>
          <img src={user.photoURL} alt="" className='avatar'/>
          <p>{user.username} wrote on {this.configureDate((review.created_at).slice(0,10))}</p>
          <ul className='star-rating'>{this.starsify(review.rating)}</ul>
        </div>
        <p className='review-body'>{review.body}</p>
        <Link to={productShowPath}>
        <div className="hr-product-container">
          <img src={product.photoURL} alt="" className='product-photo'/>
          <p className='product-description'>{this.capitalize(product.name)}</p>
        </div>
        </Link>
      </li>
    )
  }
}

export default HappyReview;