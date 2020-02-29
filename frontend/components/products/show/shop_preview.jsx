import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from '../index/index_item';


class ShopPreview extends React.Component{
  constructor(props){
    super(props);

    this.needToUpdate = false;

    this.compileProducts = this.compileProducts.bind(this);
    this.configureDate = this.configureDate.bind(this);
  }

  componentDidMount(){
    this.props.fetchProductsByShop(this.props.shop.id, this.props.curProdId, 6);
  }

  componentDidUpdate(prevProps){
    if(prevProps.curProdId !== this.props.curProdId && prevProps.curPath.includes('/products/')){
      this.props.fetchProductsByShop(this.props.shop.id, this.props.curProdId , 6);
    }
    // this.needToUpdate = true;
    // if(this.needToUpdate){
    //   this.needToUpdate = false;
    // }
  }

  compileProducts(products){
    let pArr = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      pArr.push(
        <IndexItem product={p} loggedIn={this.props.loggedIn} type={'mid'} key={p.id}/>
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
    if(!this.props.products.shopProductIds){
      return <p></p>;
    }
    // let products = this.compileProducts(this.props.shopProducts);
    let { products } = this.props;
    let productsArr = this.compileProducts(products.shopProductIds.map((id) => products[id]));
    return(
      // high level container
      <div className='shop-preview-container'>
        <div className='shop-preview-info-and-link'>
          <div className='shop-preview-info-and-name'>
            <img src={this.props.shop.photoURL} alt="" className='fake-shop-preview-photo'/>
            <div className='shop-preview-info'>
              <div className='shop-preview-info-upper'>
                <p>{this.props.shop.name}</p>
                <p>{this.props.shopStarRating}</p>
                <p>{this.props.shopReviewCount}</p>
              </div>
              <div className='shop-preview-info-lower'>
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
        <ul className='shop-preview-products-container'>
          {productsArr}
        </ul>
      </div>
    )
  }
}

export default ShopPreview;