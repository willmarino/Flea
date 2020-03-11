import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from '../index/index_item';


class ShopPreview extends React.Component{
  constructor(props){
    super(props);

    this.needToUpdate = false;
    this.compileProducts = this.compileProducts.bind(this);
    this.configureDate = this.configureDate.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(e){
    let { shop, loggedIn, history } = this.props;
    let url = `/shops/${this.props.shop.id}`;
    if(!this.props.loggedIn){
      url = '/anon' + url;
    }
    history.push(url);
  }

  componentDidMount(){
    let { fetchProductsByShop, fetchOrdersByShop, shop, curProdId } = this.props;
    fetchProductsByShop(shop.id, curProdId, 6)
      .then(() => {
        fetchOrdersByShop(shop.id);
      })
  }

  componentDidUpdate(prevProps){
    if(prevProps.curProdId !== this.props.curProdId && prevProps.curPath.includes('/products/')){
      this.props.fetchProductsByShop(this.props.shop.id, this.props.curProdId , 6);
    }
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
    // if(!this.props.products.shopProductIds){
    if(!this.props.orders.shopOrderIds){
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
            <img onClick={this.handleNavigate} src={this.props.shop.photoURL} alt="" className='fake-shop-preview-photo'/>
            <div className='shop-preview-info'>
              <div className='shop-preview-info-upper'>
                <p onClick={this.handleNavigate} className="shop-preview-shop-name">{this.props.shop.name}</p>
                <p>{this.props.shopStarRating}</p>
                <p>{this.props.shopReviewCount}</p>
              </div>
              <div className='shop-preview-info-lower'>
                <p>location placeholder</p>
                <p>{this.props.orders.shopOrderIds.length} Sales</p>
                <p> On Etsy since {this.configureDate(this.props.shop.created_at)}</p>
              </div>
            </div>
          </div>
          <p onClick={this.handleNavigate} className='shop-preview-link'> View all {this.props.shopReviewCount} reviews</p>
        </div>
        <ul className='shop-preview-products-container'>
          {productsArr}
        </ul>
      </div>
    )
  }
}

export default ShopPreview;