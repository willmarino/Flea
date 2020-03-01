import React from 'react';

class HappyReview extends React.Component{
  constructor(props){
    super(props);

    this.starsify = this.starsify.bind(this);
  }

  starsify(num){
    let stars = [];
    for(let i = 0; i < num; i++){
      stars.push(<li key={Math.round(Math.random() * 99)}><i className="fa fa-star"></i></li>)
    }
    return stars;
  }

  configureDate(str){
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let [year, month, day] = str.split('-');
    return `${months[month - 1]} ${day}`

  }

  render(){
    let {user, review, product} = this.props;
    return(
      <li className='happy-review' >
        <div className='hr-container-one'>
          <img src={user.photoURL} alt="" className='avatar'/>
          <p>{user.username} wrote on {this.configureDate((review.created_at).slice(0,10))}</p>
          <ul className='star-rating'>{this.starsify(review.rating)}</ul>
        </div>
        <p className='review-body'>{review.body}</p>
        <div>
          <img src={product.photoURL} alt="" className='product-photo'/>
          <p className='product-description'>placeholder description</p>
        </div>
      </li>
    )
  }
}

export default HappyReview;