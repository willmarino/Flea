import React from 'react';
import IndexItem from '../index/index_item';

class ShowRecommend extends React.Component{
  constructor(props){
    super(props);

    this.compileProducts = this.compileProducts.bind(this);
  }

  // componentDidMount(){
  //   debugger;
  //   if(this.props.shopProducts) this.props.fetchAssociatedProducts(this.props.product.id, this.props.shopProducts);
  // }

  componentWillReceiveProps(nextProps){
    debugger;
    if(nextProps.shopProducts && !this.props.shopProducts) this.props.fetchAssociatedProducts(this.props.product.id, nextProps.shopProducts);
  }

  compileProducts(){
    let products = [];
    for(let i = 0; i < this.props.associatedProducts.length; i++){
      let p = this.props.associatedProducts[i];
      products.push(
        <IndexItem loggedIn={this.props.loggedIn} type='complex' key={p.id} shop={this.props.shop} product={p}/>
      )
    }
    return products
  }

  render(){
    if(!this.props.associatedProducts){
      return <p></p>;
    }
    let products = this.compileProducts();
    return(
      <ul className='product-show-associated-list'>
        {products}
      </ul>
    )
  }
}

export default ShowRecommend;