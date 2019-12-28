import React from 'react';
import CategoryIndexItem from '../index/category_index_item';

class CategoryRow extends React.Component{
  constructor(props){
    super(props);
    this.categories = [
      "Jewelry & Accessories",
      "Clothing & Shoes",
      "Home & Living",
      "Wedding & Party",
      "Toys & Entertainment",
      "Arts & Collectibles",
      "Craft Supplies",
      "Vintage",
      "Gifts"
    ];
  }

  render(){
    // debugger;
    if(this.props.productsArr.length === 0){
      return <p>loading</p>;
    }
    // debugger;
    let pics = [];
    let i = 0;
    while(i < 6){
      let cur_cat = this.categories[i];
      let pushed = false;
      let j = 0;
      while(!pushed){
        let cur_prod = this.props.productsArr[j];
        debugger;
        if(cur_prod.high_level_category === cur_cat){
          pics.push(<CategoryIndexItem p={cur_prod} key={i}/>);
          pushed = true;
          i += 1;
          j = 0;
        }
        j += 1;
      }
      // debugger;
    }

    return(
      <li>
        <h2 className= "row-header">Gifts!</h2>
        <ul>
          {pics}
        </ul>
      </li>
    );
  }
}

export default CategoryRow;