import React from 'react';

class ShopTopBanner extends React.Component{
  constructor(props){
    super(props);

    this.handleCreateShopFavorite = this.handleCreateShopFavorite.bind(this);
    this.starsify = this.starsify.bind(this);
    this.configureDate = this.configureDate.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(e){
    e.preventDefault();
    let { shopOwner, currentUser, history } = this.props;
    let url = `/profiles/${shopOwner.id}`;
    if(!currentUser){
      url = '/anon' + url;
    }
    history.push(url);
  }

  handleCreateShopFavorite(e){
    e.preventDefault();
    this.props.createShopFavorite(this.props.shop.id);
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
    return(
      <div className="shop-show-banner-container">
        <div className="shop-show-banner-shop">
          <img src={shop.photoURL} alt="" className="shop-show-shop-photo"/>
          <div className="banner-shop-info">
            <p id="shop-banner-header">{shop.name}</p>
            <p id="shop-banner-description">{shop.description}</p>
            <div>
              <div className="sb-location-and-sales">
                <p>Placeholder Location</p>
                <p id="sb-sales">{this.props.sales.length} Sales</p>
              </div>
              <p id="sb-created-at">On Etsy since {this.configureDate(shop.created_at)}</p>
            </div>
            <p id="sb-reviews-info">{this.starsify(Math.round(shop.rating))} ({this.props.numReviews})</p>
            <p onClick={this.handleCreateShopFavorite} className="add-shop-favorite-button">Favorite Shop (num)</p>
          </div>
        </div>
        <div className="shop-show-banner-owner">
          <p>SHOP OWNER</p>
          <div className="owner-avatar-and-name">
            <img onClick={this.handleNavigate} src={this.props.shopOwner.photoURL} alt="" className="shop-owner-avatar"/>
            <p onClick={this.handleNavigate} id="shop-owner-name">{this.props.shopOwner.username}</p>
          </div>
          <p>Contact</p>
        </div>
      </div>
    )
  }
}

export default ShopTopBanner;