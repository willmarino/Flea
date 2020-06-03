import React from 'react';
import SimpleProductInfo from './product_info_types/simple_product_info';

const ProductInfo = (props) => {
  let { product } = props;
  let componentMap = {
    "complex": 1,
    "mid": 2,
    "simple": <SimpleProductInfo product={product}/>,
    "reviewed": 4
  }
  return componentMap[props.previewType];
}

export default ProductInfo;