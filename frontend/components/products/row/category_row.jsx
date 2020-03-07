import React from 'react';
import CategoryIndexItem from '../index/category_index_item';

class CategoryRow extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    if(!this.props.products){
      return <p>Loading</p>;
    }

    let products = [];
    for(let i = 0; i < this.props.products.length; i++){
      let p = this.props.products[i];
      debugger;
      products.push(
        <CategoryIndexItem
          p={p}
          key={p.id}
          categoryName={this.props.categories[p.high_level_category].name}/>
      )
    }

    return(
      <>
        <div className="row-header-container">
          <p className="row-header">Popular Categories</p>
          <p className="row-header-sub">See More</p>
        </div>
        <li>
          <ul>
            {products}
          </ul>
        </li>
      </>
    );
  }
}

export default CategoryRow;