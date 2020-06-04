import React from 'react';
import ProductRow from '../../products/row/product_row';

const ProductIndex = (props) => {
  let { products, categories, loggedIn } = props;
  let productIds = products.indexIds;

  let rows = productIds.map((idSubArray, i) => {
    let rowOfProducts = idSubArray.map((id) => products[id]);
    let sampleProduct = rowOfProducts[0];
    let category = categories[sampleProduct.high_level_category].name;
    return(
      <ProductRow type="simple" rowOfProducts={rowOfProducts} category={category} loggedIn={loggedIn}/>
    )
  })

  return <div className="product-index-container"> {rows} </div>;
}

export default ProductIndex;