import React from 'react';
import Review from '../../reviews/review';

class ProductShowReviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      limit : 10
    }
  }

  changeReviewsDisplay(e){
    e.preventDefault();

  }

  return(){

    return(
      <div className="reviews">
        <div className="review-meta-info">
            <p>Reviews</p>
            <p>{rating}</p>
            <p>{count}</p>
        </div>
        <div className='reviews-tabs'>
            <div>
                <p onClick={this.switchTabToProduct}>For this item ({this.pCount})</p>
            </div>
            <div>
                <p onClick={this.switchTabToShop}>For this shop ({this.sCount})</p>
            </div>
        </div>
        <ul>

        </ul>
      </div>
    )
  }
}

export default ProductShowReviews;