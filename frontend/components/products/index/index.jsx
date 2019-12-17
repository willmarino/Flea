import React from 'react';
import IndexItem from './index_item';
import IndexRowContainer from '../row/index_row_container';


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

  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchShops();
  }

  render() {

    // let categorynums = [Math.random() * 9, Math.random() * 9];
    let categories = [1, 2].map((num) => {
      return this.categories[num];
    });
    let i = -1;
    let catComps = categories.map((cat) => {
      i += 1;
      return <IndexRowContainer category={cat} type="simple" key={i}/>;
    });


    // let arr;
    // let productsArr;

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
      <ul className="primary-index">
        {/* {productsArr} */}
        {catComps}
      </ul>
    );
  }

}

export default Index;