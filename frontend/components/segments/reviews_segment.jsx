import React from 'react';
import TrendingContainer from './trending_container';

class ReviewSegment extends React.Component{
  constructor(props){
    super(props);

    this.starsify = this.starsify.bind(this);
  }

  componentDidMount(){
    // this.props.fetchReviews();
    // this.props.fetchShops();
    // this.props.fetchUsers();
  }

  starsify(n){
    let stars = [];
        while(stars.length < n){
            stars.push(<i className="fa fa-star" key={stars.length}></i>)
        }
      return stars;
  }


  render(){
    if(!this.props.products || !this.props.reviews || !this.props.users){
      return <p></p>
    }
    if (Object.keys(this.props.products).length === 0 || Object.keys(this.props.users).length === 0 || Object.keys(this.props.reviews).length === 0){
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

    let dates = reviews.map((r) => {
      let cur_date = r.created_at.split("T");
      return cur_date[0];
    })

    let names = reviews.map((r) => {
      return this.props.users[r.author_id].username;
    })

    let reviewDates = [];
    let k = 0
    while(k < 3){
      reviewDates.push(`${names[k]} wrote this on ${dates[k]}`)
      k += 1;
    }

    return(
      <div className="reviews-segment">
        <p>Reviews from happy people</p>
        <div className="r-row-one">
          <div id="row-one-col-one">
            
            <img src={this.props.users[reviews[0].author_id].photoURL} alt=""/>
            <p>{reviewDates[0]}</p>
            <p>{this.starsify(reviews[0].rating)}</p>
            <p>{reviews[0].body}</p>
          </div>
          <div id="row-one-col-two">
            <img src={this.props.users[reviews[1].author_id].photoURL} alt=""/>
            <p>{reviewDates[1]}</p>
            <p>{this.starsify(reviews[1].rating)}</p>
            <p>{reviews[1].body}</p>
          </div>
          <div id="row-one-col-three">
            <img src={this.props.users[reviews[2].author_id].photoURL} alt=""/>
            <p>{reviewDates[2]}</p>
            <p>{this.starsify(reviews[2].rating)}</p>
            <p>{reviews[2].body}</p>
          </div>
        </div>
        <div className="r-row-two">
          <div id="row-two-col-one">
            <img src={products[0].photoURL} alt="" className="review-product-photo"/>
            <p>{products[0].name}</p>
          </div>
          <div id="row-two-col-two">
            <img src={products[1].photoURL} alt="" className="review-product-photo" />
            <p>{products[1].name}</p>
          </div>
          <div id="row-two-col-three">
            <img src={products[2].photoURL} alt="" className="review-product-photo" />
            <p>{products[2].name}</p>
          </div>
        </div>

        <div className="r-row-three">
          <p>Trends</p>
          <div>
            <div id="row-three-col-one">
              <img src={products[3].photoURL} alt="" className="trend-product-photo"/>
              <p>Featured Shop</p>
              <div>
                <p>{this.props.shops[products[3].shop_id].name}</p>
                <p>{reviews[4].body}</p>
              </div>
            </div>
            <div id="row-three-col-one">
              <img src={products[4].photoURL} alt="" className="trend-product-photo" />
              <p>Featured Item</p>
              <div>
                <p>{this.props.shops[products[3].shop_id].name}</p>
                <p>{reviews[4].body}</p>
              </div>
            </div>
            <div id="row-three-col-one">
              <img src={products[5].photoURL} alt="" className="trend-product-photo"/>
              <p>Featured Style</p>
              <div>
                <p>{this.props.shops[products[3].shop_id].name}</p>
                <p>{reviews[5].body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSegment;