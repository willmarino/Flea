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
    // let cats = [];
    // let i = 0;
    // while(cats.length < 6){
    //   let item = <CategoryIndexItem category={this.categories[i]} key={i}/>
    //   cats.push(item);
    //   i += 1;
    // }

    let pics = [];
    let i = 0
    // debugger;
    while (i < 6){
      let cur_category = this.categories[i];
      this.props.productsArr.forEach((p) => {
        let pushed = false;
        while(pushed === false){
          if(p.high_level_category === cur_category){
            pics.push(<CategoryIndexItem product={p} key={p.id}/>);
            pushed === true;
          }
        }
      })
      i += 1
    }

    return(
      <li>
        <h2>Gifts!</h2>
        <ul>
          {pics}
        </ul>
      </li>
    );
  }
}

export default CategoryRow;