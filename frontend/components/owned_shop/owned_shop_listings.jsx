import React from 'react';

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
    debugger;
    this.productsByFilter = { 10000 : [] }
    let catArr = [];
    products.forEach((p) => {
      let prodBlock = <li>
        <img src={p.photoURL} alt=""/>
        <p>{p.name}</p>
        <p>${p.price}</p>
      </li>;
      this.productsByFilter[10000].push(prodBlock);
      if(this.productsByFilter[p.high_level_category.name]){
        this.productsByFilter[p.high_level_category.id].push(prodBlock);
      }else{
        this.productsByFilter[p.high_level_category.name] = [prodBlock];
      }
      if(!catArr.includes(categories[p.high_level_category.name])){
        catArr.push(categories[p.high_level_category.name]);
      }
    });
    this.filters = catArr.map((cat) => <li onClick={this.switchCategory} data-cat={cat.id}>{cat}</li>);
    this.filters.unshift(<li onClick={this.switchCategory} data-cat={10000} >All</li>)
  }

  render(){
    debugger;
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
            <input type="text"/>
            {this.filters}
            <p>sales</p>
            <p>admirers</p>
          </div>
          <div className="OSL-products">
            <ul>
              {this.productsByFilter[this.state.category]}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default OwnedShopListings;