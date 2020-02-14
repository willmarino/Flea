import React from 'react';

class ShopTopBanner extends React.Component{
  constructor(props){
    super(props);

    this.starsify = this.starsify.bind(this);
    this.configureDate = this.configureDate.bind(this);
  }

  starsify(n){
    let stars = [];
      while(stars.length < n){
        stars.push(<i className="fa fa-star" key={stars.length}></i>)
      }
    return stars;
  }

  configureDate(str){
    str = str.slice(0,10);
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
    return `${year}`;

  }


  render(){
    let shop = this.props.shop;
    // definer banner here
    return(
      <div className="shop-show-banner-container">
        <div className="shop-show-banner-shop">
          {/* <div className="top-banner-fake-image">
          </div> */}
          <img src={shop.photoURL} alt="" className="shop-show-shop-photo"/>
          <div className="banner-shop-info">
            <p>{shop.name}</p>
            <p>{shop.description}</p>
            <p>{shop.name}</p>
            <div>
              <p>Placeholder Location</p>
              <p>Num Sales</p>
              <p>On Etsy since {this.configureDate(shop.created_at)}</p>
            </div>
            <p>{this.starsify(Math.round(shop.rating))}</p>
          </div>
        </div>
        <div className="shop-show-banner-owner">
          <p>SHOP OWNER</p>
          <img src={this.props.shopOwner.photoURL} alt="" className="shop-owner-avatar"/>
          <p>{this.props.shopOwner.username}</p>
          <p>Contact</p>
        </div>
      </div>
    )
  }
}

export default ShopTopBanner;