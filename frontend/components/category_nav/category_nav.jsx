import React from 'react';

class CategoryNav extends React.Component{
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
    let i = -1;
    const catsArr = this.categories.map((cat) => {
      i += 1;
      return(
        <li className="category" key={i}>{cat}</li>
      );
    });
    return(
      <ul className="category-container">
        {catsArr}
      </ul>
    );
  }

}

export default CategoryNav;