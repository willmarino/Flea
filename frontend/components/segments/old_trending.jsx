import React from 'react';

class Trending extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    let products = [];
    let reviews = [];
    while (reviews.length < 6) {
      let cur_review = Object.values(this.props.reviews)[Math.round(Math.random() * 150)];
      if (!reviews.includes(cur_review) && cur_review.rating >= 4) {
        reviews.push(cur_review);
        let cur_prod_id = cur_review.item_id;
        products.push(this.props.products[cur_prod_id]);
      }
    }

    return(
      <div className="trending-container">
        <div className="r-row-three">
          <p>Trends</p>
          <div>
            <div id="row-three-col-one">
              <img src={this.props.products[3].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[this.props.products[3].shop_id].name}</p>
              <p>{}</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={this.props.products[4].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[this.props.products[4].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
            <div id="row-three-col-one">
              <img src={this.props.products[5].photoURL} alt="" className="trend-product-photo" />
              <p>{this.props.shops[this.props.products[5].shop_id].name}</p>
              <p>title</p>
              <p>blurb</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Trending;