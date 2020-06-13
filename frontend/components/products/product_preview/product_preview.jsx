import React from 'react';
import ProductInfo from './product_info'

class ProductPreview extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // 
    // 
  }

  render(){
    let { product, previewType } = this.props;
    return(
      <div onClick={this.handleClick} className='standard-product-preview-container' id={`${previewType}-pp-container`}>
        <div className="standard-product-preview-photo-container">
          <img className="standard-product-preview-photo" src={product.photoURL} alt=""/>
        </div>
        <ProductInfo product={product} previewType={previewType}/>
      </div>
    )
  }
}

export default ProductPreview;