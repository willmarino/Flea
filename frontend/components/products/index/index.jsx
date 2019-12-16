import React from 'react';
import IndexItem from './index_item';


class Index extends React.Component {
  constructor(props) {
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

  render() {

    let categorynums = [Math.random() * 9, Math.random() * 9];
    let categories = categorynums.map((num) => {
      return this.categories[num];
    });

    let arr;
    let productsArr;

    // debugger;
    // arr = Object.values(this.props.products);
    // let i = 0;
    // productsArr = arr.map((product) => {
    //   let cur_cat = categories[i];
    //   let shop = this.props.shops[product.shop_id];
    //   i += 1;
    //   return(
    //     // <IndexItem product={product} key={product.id}/>
    //     <IndexRow category={cur_cat} />
    //   );
    // });

    


    return (
      <ul>
        {productsArr}
      </ul>
    );
  }

}

export default Index;