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
    debugger;
    return(
      <div className='complex-product-info-container'>
        <ProductPrice product={product}/>
        <StarRating rating={product.rating}/>
        <p>{shop.name}</p>
        <p>{product.name}</p>
      </div>
    )
  }
}

export default ComplexProductInfo;