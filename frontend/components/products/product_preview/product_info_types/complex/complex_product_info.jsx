import React from 'react';
import ProductPrice from '../product_price';
import StarRating from '../star_rating';

class ComplexProductInfo extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    let { fetchShopByProductId, product } = this.props;
    fetchShopByProductId(product.id);
  }
  render(){
    let { shop, product } = this.props;
    if(!shop){
      return null;
    }
    return(
      <div className='complex-product-info-container'>
        <p id={'cppi-product-name'}>{product.name}</p>
        <p id={'cppi-shop-name'}>{shop.name}</p>
        <StarRating rating={product.rating}/>
        <ProductPrice product={product}/>
      </div>
    )
  }
}

export default ComplexProductInfo;