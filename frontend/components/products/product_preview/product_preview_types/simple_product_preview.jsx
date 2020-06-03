import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductInfo from '../product_info/product_info';

class SimpleProductPreview extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

  }

  render(){
    let { product } = this.props;
    return(
      <div onClick={this.handleClick} className='standard-product-preview-container'>
        <div className="standard-product-preview-photo-container">
          <img className="standard-product-preview-photo" src={product.photoURL} alt=""/>
        </div>
        {/* <div className="spp-info">
          <p>${product.price}</p>
        </div> */}
        <ProductInfo product={product}/>
      </div>
    )
  }
}

export default withRouter(SimpleProductPreview);