import React from 'react';
import IndexItem from '../index/index_item';

class ShowRecommend extends React.Component{
  constructor(props){
    super(props);

    this.fetched = false;

    this.compileProducts = this.compileProducts.bind(this);
  }


  componentDidUpdate(prevProps){
    if(!prevProps.shopProducts && this.props.shopProducts){
      this.fetched = false;
    }else if(prevProps.curProdId !== this.props.curProdId){
      this.fetched = false;
    }
    if(!this.fetched){
      this.props.fetchAssociatedProducts(this.props.product.id, this.props.shopProducts);
      this.fetched = true;
    }
  }

  compileProducts(){
    let products = [];
    for(let i = 0; i < this.props.associatedProducts.length; i++){
      let p = this.props.associatedProducts[i];
      products.push(
        <IndexItem loggedIn={this.props.loggedIn} type='complex' key={p.id} shop={this.props.shops[i]} product={p}/>
      )
    }
    return products
  }

  render(){
    if(!this.props.associatedProducts || !this.props.shops){
      return <p></p>;
    }
    let products = this.compileProducts();
    return(
      <>
        <h2>You may also like</h2>
        <ul className='product-show-associated-list'>
          {products}
        </ul>
      </>
    )
  }
}

export default ShowRecommend;