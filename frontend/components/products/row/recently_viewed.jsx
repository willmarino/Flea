import React from 'react';
import IndexItem from '../index/index_item';

class RecentlyViewed extends React.Component{
  constructor(props){
    super(props);
    this.compileProducts = this.compileProducts.bind(this);
    this.productsList = [];
  }

  compileProducts(){
    let { recentlyViewedProducts } = this.props;
    let products = [];
    debugger;
    for(let i = 0; i < recentlyViewedProducts.length; i++){
      let p = recentlyViewedProducts[i];
      products.push(
        <IndexItem loggedIn={this.props.loggedIn} product={p} type="simple" key={p.id}/>
      );
    }
    debugger;
    this.productsList = <ul>{products}</ul>;
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