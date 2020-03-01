import React from 'react';
import HappyReview from './happy_review';

class ReviewsSegment extends React.Component{
  constructor(props){
    super(props);

    this.compileReviews = this.compileReviews.bind(this);
  }

  componentDidMount(){
    this.props.fetchHappyReviews();
  }

  compileReviews(){
    let users = this.props.users.happyUserIds.map((id) => this.props.users[id]);
    let products = this.props.products.happyProductIds.map((id) => this.props.products[id]);
    let reviews = this.props.reviews.happyReviewIds.map((id) => this.props.reviews[id]);
    let reviewsObj = [];
    for(let i = 0; i < 3; i++){
      reviewsObj.push(<HappyReview product={products[i]} review={reviews[i]} user={users[i]} key={reviews[i].id}/>)
    }
    return reviewsObj;
  }

  allPresent(){
    if(this.props.users.happyUserIds && this.props.reviews.happyReviewIds && this.props.products.happyProductIds) return true;
    return false;
  }

  render(){
    if(!this.allPresent()) return <p></p>;
    return(
      <ul className='all-happy-reviews'>
        {this.compileReviews()}
      </ul>
    )
  }
}

export default ReviewsSegment;