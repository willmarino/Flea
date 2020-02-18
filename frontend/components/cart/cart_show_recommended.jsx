import React from 'react';
import IndexItem from '../products/index/index_item';

class CartShowRecommended extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: 1
    }
    this.compileProducts = this.compileProducts.bind(this);
    this.productsObj = this.compileProducts();
    this.minPage = 1;
    this.maxPage = Object.keys(this.productsObj).length;
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(e){
    e.preventDefault();
    if(!this.props.cartProducts[e.currentTarget.dataset['itemid']]){
      this.props.createCartItem({cart_id : this.props.cartId, item_id : e.currentTarget.dataset['itemid']});
    }
  }



  compileProducts(){
    let { products } = this.props;
    let res = {};
    let page = 1;
    let subArr = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      subArr.push(
        <ul key={p.id}>
          <IndexItem type={'cart-recommended'} product={p} shop={this.props.shop}/>
          <li onClick={(e) => this.handleCreate(e)} data-itemid={p.id}>Add to cart</li>
        </ul>
      );
      if(subArr.length === 5){
        res[page] = subArr;
        page += 1;
        subArr = [];
      }
    }
    if(subArr.length !== 0) res[page] = subArr;
    return res;
  }

  incrementPage(){
    if(this.state.page + 1 <= this.maxPage){
      this.setState({ page : this.state.page + 1 })
    }
  }


  decrementPage(){
    if(this.state.page - 1 >= this.minPage){
      this.setState({ page : this.state.page - 1 })
    }
  }

  render(){
    let products = this.productsObj[this.state.page];

    return(
      <div className="cart-show-recommended">
        <div>
          <p>You may also like</p>
          <div>
            <p>page {this.state.page} of {this.maxPage}</p>
            <div onClick={this.decrementPage}>down</div>
            <div onClick={this.incrementPage}>up</div>
          </div>
        </div>
        <div className="cart-show-recommended-products">
          {products}
        </div>
      </div>
    )
  }
}

export default CartShowRecommended;