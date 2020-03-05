import React from 'react';
import IndexItem from '../products/index/index_item';

class OwnedShopListings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category : 10000
    }
    this.switchCategory = this.switchCategory.bind(this);
    this.compileFilters = this.compileFilters.bind(this);
    this.compileFilters();
  }

  switchCategory(e){
    this.setState({ category : parseInt(e.currentTarget.dataset.cat, 10) });
  }

  compileFilters(){
    let { products, categories } = this.props;
    this.productsByFilter = { 10000 : [] }
    let catArr = [];
    products.forEach((p) => {
      let prodBlock = <IndexItem product={p} loggedIn={true} type={"mid"}/>;
      this.productsByFilter[10000].push(prodBlock);
      if(this.productsByFilter[p.high_level_category]){
        this.productsByFilter[p.high_level_category.id].push(prodBlock);
      }else{
        this.productsByFilter[p.high_level_category] = [prodBlock];
      }
      if(!catArr.includes(categories[p.high_level_category])){
        catArr.push(categories[p.high_level_category]);
      }
    });
    this.filters = catArr.map((cat) => <li onClick={this.switchCategory} data-cat={cat.id}>
      <p>{cat.name}</p>
      <p>{this.productsByFilter[cat.id].length}</p>
    </li>);
    this.filters.unshift(<li onClick={this.switchCategory} data-cat={10000} >
      <p>All</p>
      <p>{this.productsByFilter[10000].length}</p>
    </li>)
  }

  render(){
    return(
      <div className="OSL-container">
        <div className="OSL-header">
          <p>Items</p>
          <div>
            <p>Sort: Most Recent</p>
          </div>
        </div>
        <div className="OSL-listings">
          <div className="OSL-filters">
            <div className="shop-listings-search">
              <p className="shop-listings-search-mag">E</p>
              <input type="text"/>
              <p className="shop-listings-search-clear">X</p>
            </div>
            {this.filters}
            <p>sales</p>
            <p>admirers</p>
          </div>
          {/* <div className="OSL-products-container"> */}
          <ul className="OSL-products">
            {this.productsByFilter[this.state.category]}
          </ul>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default OwnedShopListings;