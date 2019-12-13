import React from 'react';
import IndexItem from './index_item';


class Index extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let arr;
    let productsArr;

    // debugger;
    arr = Object.values(this.props.products);

    productsArr = arr.map((product) => {
      return(
        <IndexItem product={product} key={product.id}/>
      );
    });

    return (
      <ul>
        {productsArr}
      </ul>
    );
  }

}

export default Index;