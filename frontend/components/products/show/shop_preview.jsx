import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from '../index/index_item';


class ShopPreview extends React.Component{
  constructor(props){
    super(props);

    this.compileProducts = this.compileProducts.bind(this);
    this.configureDate = this.configureDate.bind(this);
  }

  componentDidMount(){
    this.props.fetchProductsByShop(this.props.shop.id);
  }

  compileProducts(products){
    let pArr = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      pArr.push(
        <IndexItem product={p} loggedIn={this.props.loggedIn} type={'complex'} key={p.id}/>
      )
    }
    return pArr;
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
    if(!this.props.shopProducts){
      return <p></p>;
    }
    let products = this.compileProducts(this.props.shopProducts);
    debugger;
    return(
      // high level container
      <div className='shop-preview-container'>
        <div className='shop-preview-info-and-link'>
          <div className='shop-preview-info-and-name'>
            <div className='fake-shop-preview-photo'>
            </div>
            <div className='shop-preview-info'>
              <div className='shop-preview-info-section'>
                <p>{this.props.shop.name}</p>
                <p>{this.props.shopStarRating}</p>
                {this.props.shopReviewCount}
              </div>
              <div className='shop-preview-info-section'>
                <p>location placeholder</p>
                <p>num sales</p>
                <p> On Etsy since {this.configureDate(this.props.shop.created_at)}</p>
              </div>
            </div>
          </div>
          <div className='shop-preview-link'>
            <Link to='/'><button> View all {this.props.shopReviewCount} items</button></Link>
          </div>
        </div>
        <ul className='shop-products-container'>
          {products}
        </ul>
      </div>
    )
  }
}

export default ShopPreview;