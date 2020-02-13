import React from 'react';
import IndexItem from '../products/index/index_item';

class ShopProducts extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: '',
      filter: 'all',
      products: this.props.products
    }

    // create an initial structure for products which means they do not have to be recompiled every new category search
    this.productsArr = this.props.products; // for searched based on title, where no categorization (no simple one) will help
    this.structureProducts = this.structureProducts.bind(this);
    this.products = this.structureProducts();
    this.grabCats = this.grabCats.bind(this);
    this.cats = this.grabCats();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.filterProductsByCategory = this.filterProductsByCategory.bind(this);
    debugger;
  }

  
  // returns an object of products grouped underneath keys corresponding to their categories,
  // which means switching filters and displaying new products will take O(1) time, not O(n),
  // after initial O(n) structureProducts call at beginning of component lifecycle
  structureProducts(){
    let products = this.props.products;
    let res = {};
    res['all'] = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      let cat = p.high_level_category;
      if(Object.keys(res).includes(cat)){
        res[cat].push(p);
      }else{
        res[cat] = [p];
      }
      res['all'].push(p);
    }
    debugger;
    return res;
  }

  grabCats(){
    let res = [];
    debugger;
    let productKeys = Object.keys(this.products);
    for(let i = 0; i < productKeys.length; i++){
      let key = productKeys[i];
      res.push(
        <li key={key} data-value={key} onClick={(e) => this.filterProductsByCategory(e)}>{key}</li>
      );
    }
    debugger;
    return res;
  }

  // iterate through all products, compile list of products which include search term in title,
  // set state.products to be equal to the resulting list
  handleSubmit(e){
    e.preventDefault();
    let searchTerm = this.state.search;
    let products = [];
    for(let i = 0; i < this.productsArr.length; i++){
      let p = this.productsArr[i];
      if(p.name.split(" ").includes(searchTerm)){
        products.push(p);
      }
    }
    this.setState({products : products});
  }

  update(e){
    e.preventDefault();
    this.setState({ search : e.currentTarget.value });
  }

  // change the products which are being displayed
  filterProductsByCategory(e){
    debugger;
    this.setState({products : this.products[e.currentTarget.dataset.value]});
    this.setState({search : ''});
  }

  render(){
    let productsList = [];
    for(let i = 0; i < this.state.products.length; i++){
      let p = this.state.products[i];
      productsList.push(
        <IndexItem type='mid' product={p} loggedIn={this.props.loggedIn} key={p.id}/>
      )
    }

    return(
      <div className="shop-products-container">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} onChange={this.update}/>
            <input type="submit" value='submit'/>
          </form>
          <ul>
            {this.cats}
          </ul>
        </div>
        <ul>
          {productsList}
        </ul>
      </div>
    )
  }
}

export default ShopProducts;