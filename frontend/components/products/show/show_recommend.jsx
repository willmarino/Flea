import React from 'react';
import IndexItem from '../index/index_item';

class ShowRecommend extends React.Component{
  constructor(props){
    super(props);
    this.fetched = false;
    this.compileProducts = this.compileProducts.bind(this);
  }


  componentDidUpdate(prevProps){
    if(!prevProps.products.shopProductIds && this.props.products.shopProductIds){
      this.fetched = false;
    }else if(prevProps.curProdId !== this.props.curProdId){
      this.fetched = false;
    }
    if(!this.fetched){
      this.props.fetchAssociatedProducts(this.props.product.id, this.props.products.shopProductIds);
      this.fetched = true;
    }
  }

  compileProducts(){
    let products = this.props.products.associatedIds.map((id) => this.props.products[id]);
    let productsArr = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      productsArr.push(
        <IndexItem loggedIn={this.props.loggedIn} type='complex' key={p.id} shop={this.props.shops[p.shop_id]} product={p}/>
      )
    }
    return productsArr
  }

  render(){
    if(!this.props.products.associatedIds){
      return <p></p>;
    }
    let products = this.compileProducts();
    return(
      <>
        <p className="shop-recommended-header">You may also like</p>
        <ul className='product-show-associated-list'>
          {products}
        </ul>
      </>
    )
  }
}

export default ShowRecommend;