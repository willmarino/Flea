import React from 'react';
import ProductPrice from '../product_price';

class MidProductInfo extends React.Component{
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
      <div className='mid-product-info-container'>
        <p id={'mppi-product-name'}>{product.name}</p>
        <p id={'mppi-shop-name'}>{shop.name}</p>
        <ProductPrice product={product}/>
      </div>
    )
  }
}

export default MidProductInfo;