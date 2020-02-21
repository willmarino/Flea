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
      products.push(
        <CategoryIndexItem 
          p={p}
          key={p.id}
          categoryName={this.props.catRowCategories[p.high_level_category].name}/>)
    }

    return(
      <>
        <h2 className= "row-header">Gifts!</h2>
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