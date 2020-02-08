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
    let {users, reviews, products} = this.props;
    let reviewsObj = [];
    for(let i = 0; i < 3; i++){
      reviewsObj.push(<HappyReview product={products[i]} review={reviews[i]} user={users[i]} id={reviews[i].id}/>)
    }
    return reviewsObj;
  }

  allPresent(){
    if(this.props.users && this.props.reviews && this.props.products) return true;
    return false;
  }

  render(){
    if(!this.allPresent) return <p></p>;
    let {users, reviews, products} = this.props;

    return(
      <ul className='all-happy-reviews'>
        {this.compileReviews()}
      </ul>
    )
  }
}

export default ReviewsSegment;