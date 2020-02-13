import React from 'react';
import ShopShowReview from './shop_show_review';

class ShopReview extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page : 1
    }
    
    this.reviews = {};
    this.compileReviews = this.compileReviews.bind(this);
    this.starsify = this.starsify.bind(this);
  }

  starsify(n){
    let stars = [];
      while(stars.length < n){
        stars.push(<i className="fa fa-star" key={stars.length}></i>)
      }
    return stars;
  }

  // creates pages structure for review display,
  // in this.reviews, keys are page numbers and corresponding arrays are the reviews that belong on that page
  compileReviews(){
    let curPage = 1;
    let curPageReviews = [];
    for(let i = 0; i < this.props.reviews.length; i++){
      let r = this.props.reviews[i];
      let a = this.props.authors[i];
      let p = this.props.reviewProducts[r.id];
      let t = this.props.reviewTags[r.id]
      curPageReviews.push[ { review : r, author : a, product : p, tags: t } ];
      if(curPageReviews.length === 5){
        this.reviews[curPage] = curPageReviews;
        curPage += 1;
        curPageReviews = [];
      }
      if(curPageReviews.length !== 0){
        this.reviews[curPage] = curPageReviews;
      }
    }
  }

  render(){
    
    let filterWords = ['really', 'book', 'tv'];
    let filters = []
    for(let i = 0; i < filterWords.length; i++){
      let f = filterWords[i];
      filters.push(
        <li key={f}>{f}</li>
      )
    }

    let reviewsList = [];
    debugger;
    for(let i = 0; i < this.reviews[this.state.page].length; i++){
      let r = this.reviews[this.state.page][i][review];
      let a = this.reviews[this.state.page][i][author];
      let p = this.reviews[this.state.page][i][product];
      let ts = this.reviews[this.state.page][i][tags];
      reviewsList.push(
        <ShopShowReview
          review={r}
          author={a}
          starRating={this.starsify(Math.round(this.product.rating))}
          product={p}
          tags={ts}
          />
      )
    }


    return(
      <div className='shop-reviews-container'>
        <div>
          <p>Reviews</p>
        </div>
        <div>
          <div>
            <div>
              <p>Average item review</p>
              <div>{this.starsify(Math.round(this.props.shop.rating))}</div>
            </div>
            <div>
              <p>Sort By : Relevancy</p>
            </div>
          </div>
          <div>
            <p>See reviews that mention: </p>
            <ul>{filters}</ul>
          </div>
          {/* reviews */}
        </div>
      </div>
    )
  }
}

export default ShopReview;