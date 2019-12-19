import React from 'react';
import TrendingContainer from './trending_container';

class ReviewSegment extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchReviews();
    this.props.fetchShops();
  }


  render(){
    if(!this.props.products || !this.props.reviews){
      return <p></p>
    }
    if (Object.keys(this.props.products).length === 0 || Object.keys(this.props.reviews).length === 0){
      return <p></p>
    }

    let products = [];
    let reviews = [];
    while (reviews.length < 6){
      let cur_review = Object.values(this.props.reviews)[Math.round(Math.random() * 150)];
      if(!reviews.includes(cur_review) && cur_review.rating >= 4){
        reviews.push(cur_review);
        let cur_prod_id = cur_review.item_id;
        products.push(this.props.products[cur_prod_id]);
      }
    }

    if(this.props.loggedIn){
      return(
        <div className="r-row-three">
          <p>Trends</p>
          <div>
            <div id="row-three-col-one">
              <img src={products[3].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[products[3].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={products[4].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[products[4].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={products[5].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[products[5].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
          </div>
        </div>
      );
    }

    // debugger;

    return(
      <div className="reviews-segment">
        <p>Reviews from happy people</p>
        <div className="r-row-one">
          <div id="row-one-col-one">
            <i className="fa fa-smile avatar"></i>
            <p>{reviews[0].rating}</p>
            <p>{reviews[0].body}</p>
          </div>
          <div id="row-one-col-two">
            <i className="far fa-smile avatar"></i>
            <p>{reviews[1].rating}</p>
            <p>{reviews[1].body}</p>
          </div>
          <div id="row-one-col-three">
            <i className="far fa-smile avatar"></i>
            <p>{reviews[2].rating}</p>
            <p>{reviews[2].body}</p>
          </div>
        </div>
        <div className="r-row-two">
          <div id="row-two-col-one">
            <img src={products[0].photoURL} alt="" className="review-product-photo"/>
            <p>{products[0].title}</p>
          </div>
          <div id="row-two-col-two">
            <img src={products[1].photoURL} alt="" className="review-product-photo" />
            <p>{products[1].title}</p>
          </div>
          <div id="row-two-col-three">
            <img src={products[2].photoURL} alt="" className="review-product-photo" />
            <p>{products[2].title}</p>
          </div>
        </div>
        {/* <Trending products={products} shops={this.props.shops} reviews={this.props.reviews}/> */}
        {/* <TrendingContainer/> */}
        <div className="r-row-three">
          <p>Trends</p>
          <div>
            <div id="row-three-col-one">
              <img src={products[3].photoURL} alt="" className="trend-product-photo"/>
              <p>{this.props.shops[products[3].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={products[4].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[products[4].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={products[5].photoURL} alt="" className="trend-product-photo"/>
              <p>{this.props.shops[products[5].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSegment;