import React from 'react';
import IndexItem from '../index/index_item';

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
    this.compileProducts();
    return(
      <>
        <h2 className="row-header">Recently Viewed</h2>
        <li>
          {this.productsList}
        </li>
      </>
  )
  }
}

export default RecentlyViewed;