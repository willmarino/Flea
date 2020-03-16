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
  }

  structureProducts(){
    let products = this.props.products;
    this.numProductsPerCat = {};
    let res = {};
    res['All'] = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      let cat = this.props.categories[p.high_level_category].name;
      if(Object.keys(res).includes(cat)){
        res[cat].push(p);
      }else{
        res[cat] = [p];
      }
      res['All'].push(p);
    }
    return res;
  }

  grabCats(){
    let res = [];
    let productKeys = Object.keys(this.products);
    for(let i = 0; i < productKeys.length; i++){
      let key = productKeys[i];
      res.push(
        <li key={key} className="filter-list-item" data-value={key} onClick={(e) => this.filterProductsByCategory(e)}>
          <p>{key}</p>
        </li>
      );
    }
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
      let searchTermArr = searchTerm.split(" ")
      for(let j = 0; j < searchTermArr.length; j++){
        let curTerm = searchTermArr[j];
        if(p.name.split(" ").includes(curTerm)){
          products.push(p);
          break;
        }
      }
    }
    this.setState({products : products});
  }

  update(e){
    e.preventDefault();
    this.setState({ search : e.currentTarget.value });
  }

  // change the filter which is currently selected
  filterProductsByCategory(e){
    let unorderedList = document.getElementById('cat-arr');
    let children = unorderedList.children;
    for(let i = 0; i < children.length - 1; i++){
      let child = children[i];
      if(child.classList.contains('filter-list-item-grayed')){
        child.classList.remove('filter-list-item-grayed');
      }
    }
    let element = e.currentTarget;
    element.classList.add('filter-list-item-grayed');

    this.setState({products : this.products[element.dataset.value]});
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
      <div className="shop-show-products-container">
        <div className="shop-show-products-top-bar">
          <p id="products-display-header">Items</p>
          <button value="Sort: Custom"></button>
        </div>
        <div className="filters-and-products">
          <div className="shop-show-filters">
            <form onSubmit={this.handleSubmit} className="pc-search-input-container">
              <input type="text" value={this.state.search} onChange={this.update} className="pc-search-input"/>
              <input type="submit" value='submit' className="pc-search-submit"/>
            </form>
            <ul id="cat-arr" className='shop-show-filter-categories'>
              {this.cats}
              <li className="pc-contact-owner">
                <p>Contact Shop Owner</p>
              </li>
            </ul>
            <div className="pc-sales-and-admires">
              <p id="pc-sales">{this.props.numSales} Sales</p>
              <p id="pc-admires">{Object.keys(this.props.shopFavorites).length} Admirers</p>
            </div>
          </div>
          <ul className="shop-show-products">
            {productsList}
          </ul>
        </div>
      </div>
    )
  }
}

export default ShopProducts;