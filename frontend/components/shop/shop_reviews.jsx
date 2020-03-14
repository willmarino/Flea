import React from 'react';
import ShopShowReview from './shop_show_review';

class ShopReviews extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page : 1,
      curFilter : null
    }
    
    this.usingFilterButtons = false; //we can filter via page number or by words, this is a bool telling if we are filtering via words or not
    this.clearFilterButton = null; //button we will display to set state.curFilter to null if we are filtering via words, otherwise it is null

    this.filterWords = ['really', 'I', 'you'];
    this.setFilters = this.setFilters.bind(this); //function to create set of words which can be used to filter down reviews
    this.filters = this.setFilters(); //set of filter words
    this.searchBodyForFilter = this.searchBodyForFilter.bind(this);
    this.categorizeByFilters = this.categorizeByFilters.bind(this);
    this.filteredReviews = this.categorizeByFilters();

    this.reviews = {};
    this.compileReviews = this.compileReviews.bind(this); //sets this.reviews to be an object with keys of page numbers and keys of arrays of reviews
    this.starsify = this.starsify.bind(this); //takes a number, returns a number of favicon stars
    this.changePage = this.changePage.bind(this); // changes the reviews being displayed based on page number and the data in this.reviews

    this.changeFilter = this.changeFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.reviewsLength = null;
  }

  starsify(n){
    let stars = [];
      while(stars.length < n){
        stars.push(<i className="fa fa-star" key={stars.length}></i>)
      }
    return stars;
  }

  clearFilter(){
    this.setState({curFilter : null})
    this.clearFilterButton = null;
  }

  changeFilter(e){
    this.setState({curFilter : e.currentTarget.dataset.val});
    this.clearFilterButton = (<div onClick={this.clearFilter}>Clear Filter</div>)
  }

  setFilters(){
    let filterWords = this.filterWords;
    let filters = []
    for(let i = 0; i < filterWords.length; i++){
      let f = filterWords[i];
      filters.push(
        <li key={f} data-val={f} onClick={(e) => this.changeFilter(e)}>
          <p>{f}</p>
          <p>n</p>
        </li>
      )
    }
    return filters;
  }

  // create structure on constructor load that will allow O(1) time fetching of groups of reviews based on pre-picked filter words
  categorizeByFilters(){
    let { reviews, users, products } = this.props;
    let reviewsArr = reviews.shopReviewIds.map((id) => reviews[id]);
    let filteredReviews = {};
    for(let i = 0; i < reviewsArr.length; i++){
      let r = reviewsArr[i];
      let a = users[r.author_id];
      let p = products[r.item_id];
      for(let j = 0; j < this.filterWords.length; j++){
        let fw = this.filterWords[j];
        if(this.searchBodyForFilter(r, fw)){
          if(filteredReviews[fw]){
            filteredReviews[fw].push(
              { review : r, author : a, product : p}
            );
          }else{
            filteredReviews[fw] = [{ review : r, author : a, product : p}];
          }
          break;
        }
      }
    }
    return filteredReviews;
  }

  searchBodyForFilter(review, filterWord){
    let words = review.body.split(" ");
    for(let i = 0; i < words.length; i++){
      let word = words[i];
      if(word === filterWord){
        return true;
      }
    }
    return false;
  }

  // creates pages structure for review display,
  // in this.reviews, keys are page numbers and corresponding arrays are the reviews that belong on that page
  compileReviews(){
    let { reviews, users, products } = this.props;
    let reviewsArr = reviews.shopReviewIds.map((id) => (reviews[id]));
    this.reviewsLength = reviewsArr.length;
    let curPage = 1;
    let curPageReviews = [];
    for(let i = 0; i < reviewsArr.length; i++){
      let r = reviewsArr[i];
      let a = users[r.author_id];
      let p = products[r.item_id];
      curPageReviews.push( { review : r, author : a, product : p} );
      if(curPageReviews.length === 5){
        this.reviews[curPage] = curPageReviews;
        curPage += 1;
        curPageReviews = [];
      }
    }
    if(curPageReviews.length !== 0){
      this.reviews[curPage] = curPageReviews;
    }
  }

  changePage(e){
    this.setState({ page : e.currentTarget.dataset.val });
  }

  render(){
    
    this.compileReviews();

    let pages = [];
    for(let i = 0; i <= Object.keys(this.reviews).length; i++){
      let p = Object.keys(this.reviews)[i];
      pages.push(
        <li key={p} onClick={this.changePage} data-val={p}>{p}</li>
      )
    }

    let reviewsList = [];
    if(this.state.curFilter){
      for(let i = 0; i < this.filteredReviews[this.state.curFilter].length; i++){
        let r = this.filteredReviews[this.state.curFilter][i]['review'];
        let a = this.filteredReviews[this.state.curFilter][i]['author'];
        let p = this.filteredReviews[this.state.curFilter][i]['product'];
        // thought I needed tags, I dont need tags >:U
        reviewsList.push(
          <ShopShowReview
            review={r}
            author={a}
            starRating={this.starsify(Math.round(p.rating))}
            product={p}
            />
        )
      }
    }else{
      for(let i = 0; i < this.reviews[this.state.page].length; i++){
        let r = this.reviews[this.state.page][i]['review'];
        let a = this.reviews[this.state.page][i]['author'];
        let p = this.reviews[this.state.page][i]['product'];
        reviewsList.push(
          <ShopShowReview
            review={r}
            author={a}
            starRating={this.starsify(Math.round(p.rating))}
            product={p}
            />
        )
      }
    }


    return(
      <div className='shop-reviews-container'>
        <div className='shop-reviews-left-bar'>
          <p id="shop-reviews-header">Reviews</p>
        </div>
        <div className='shop-reviews-reviews-block'>
          <div className='shop-reviews-header-bar'>
            <div className='shop-reviews-top-bar'>
              <div className='shop-reviews-meta-info'>
                <p>Average item rating</p>
                <div>{this.starsify(Math.round(this.props.shop.rating))}</div>
                <p>({this.reviewsLength})</p>
              </div>
              <div className='shop-reviews-sorter'>
                <p>Sort By : Relevancy</p>
              </div>
            </div>
            <div className='shop-reviews-filter'>
              <p>See reviews that mention: </p>
              <ul className='shop-reviews-filter-buttons'>{this.filters}</ul>
              {this.clearFilterButton}
            </div>
          </div>
          <ul className='shop-reviews-list'>{reviewsList}</ul>
          <ul>{pages}</ul>
        </div>
      </div>
    )
  }
}

export default ShopReviews;