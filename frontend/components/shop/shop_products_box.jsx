import React from 'react';
import ProductPreview from '../products/product_preview/product_preview';
import { CSSTransition } from 'react-transition-group';

class ShopProductsBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newProducts: false,
      mounted: true
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.products !== this.props.products && !this.state.newProducts){
      this.setState({
        newProducts: true
      });
    }else if(prevProps.products === this.props.products && this.state.newProducts){
      this.setState({
        newProducts: false
      })
    }
  }
  render(){
    let { products } = this.props;
    let productsList = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      productsList.push(
        <ProductPreview loggedIn={this.props.loggedIn} product={p} previewType={'complex'}/>
      )
    }
    return(
      <CSSTransition classNames={'fade-shrink'} in={this.state.newProducts} timeout={1500} appear={true}>
        <ul className="shop-show-products">
          {productsList}
        </ul>
      </CSSTransition>
    )
  }
}

export default ShopProductsBox;