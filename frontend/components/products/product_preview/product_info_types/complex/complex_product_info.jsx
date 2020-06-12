import React from 'react';

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
        <p>{shop.name}</p>
      </div>
    )
  }
}

export default ComplexProductInfo;