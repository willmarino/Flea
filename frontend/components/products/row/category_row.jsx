import React from 'react';
import CategoryIndexItem from '../index/category_index_item';

class CategoryRow extends React.Component{
  constructor(props){
    super(props);
    this.categories = [
      "Gifts",
      "Jewelry & Accessories",
      "Clothing & Shoes",
      "Home & Living",
      "Wedding & Party",
      "Toys & Entertainment",
      "Arts & Collectibles",
      "Craft Supplies",
      "Vintage"
    ];
  }

  render(){
    let cats = [];
    let i = 0;
    while(cats.length < 6){
      let item = <CategoryIndexItem category={this.categories[i]} key={i}/>
      cats.push(item);
      i += 1;
    }

    return(
      <li>
        <h2>Gifts!</h2>
        <ul>
          {cats}
        </ul>
      </li>
    );
  }
}

export default CategoryRow;