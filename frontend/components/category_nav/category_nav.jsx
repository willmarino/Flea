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
      if(cat === "Gifts"){
        return(
          <li className="category-h gift-nav" id="gift" key={i}>
            <i className="fa fa-gift"></i>
            {cat}
          </li>
        );
      }else{
        return(
          <li className="category-h" key={i}>{cat}</li>
        );
      }
    });
    return(
      <ul className="category-container">
        {catsArr}
      </ul>
    );
  }

}

export default CategoryNav;