import React from 'react';
import IndexItem from './index_item';
import IndexRowContainer from '../row/index_row_container';


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.categories = [
      "Jewelry & Accessories",
      "Clothing & Shoes",
      "Home & Living",
      "Arts & Collectibles",
      "Craft Supplies",
      "Toys & Entertainment",
      "Wedding & Party",
      "Vintage",
      "Gifts"
    ];

  }

  randomNumber(n){
    return Math.round(Math.random() * n);
  }

  render() {
    let randNum = this.randomNumber(7);
    let categories = [5, 3].map((num) => {
      return this.categories[num];
    });
    let i = -1;
    let catComps = categories.map((cat) => {
      i += 1;
      return <IndexRowContainer category={cat} type="simple" key={i}/>;
    });

    return (
      <ul className="primary-index">
        {catComps}
      </ul>
    );
  }

}

export default Index;