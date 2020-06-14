import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductInfo from './product_info'

class ProductPreview extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let { history, product, loggedIn } = this.props;
    let url = (loggedIn) ? `/products/${product.id}` : `/anon/products/${product.id}`
    history.push(history.push(url));
    window.scrollTo(0, 0);
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

export default withRouter(ProductPreview);