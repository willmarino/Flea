import React from 'react';
import IndexItem from '../index/index_item';
import ProductRow from './product_row';

class RecentlyViewed extends React.Component{
  constructor(props){
    super(props);
    this.compileProducts = this.compileProducts.bind(this);
    this.productsList = [];
  }

  compileProducts(){
    let { products } = this.props;
    let productsArr = [];
    for(let i = 0; i < (this.props.limit ? this.props.limit : products.length); i++){
      let p = products[i];
      productsArr.push(
        <IndexItem loggedIn={this.props.loggedIn} product={p} type="simple" key={p.id}/>
      );
    }
    this.productsList = <ul>{productsArr}</ul>;
  }

  render(){
    return(
      <div className="product-index-container">
        <ProductRow type={'complex'} category={'Recently Viewed'} rowOfProducts={this.props.products.slice(0, 6)} loggedIn={true}/>
      </div>
    )
  }
}

export default RecentlyViewed;