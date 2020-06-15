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
    // this.compileProducts();
    return(
      <div className="product-index-container">
        <ProductRow type={'complex'} category={'Recently Viewed'} rowOfProducts={this.props.products} loggedIn={true}/>
      </div>
      // <>
      //   <div className="row-header-container">
      //     <p className="row-header">Recently Viewed</p>
      //     <p className="row-header-sub">See More</p>
      //   </div>
      //   <li>
      //     {this.productsList}
      //   </li>
      // </>
  )
  }
}

export default RecentlyViewed;