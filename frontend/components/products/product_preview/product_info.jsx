import React from 'react';
import SimpleProductInfo from './product_info_types/simple_product_info';
import ComplexProductInfoContainer from './product_info_types/complex/complex_product_info_container';
import MidProductInfoContainer from './product_info_types/mid/mid_product_info_container';

const ProductInfo = (props) => {
  let { product } = props;
  let componentMap = {
    "complex": <ComplexProductInfoContainer product={product}/>,
    "mid": <MidProductInfoContainer product={product}/>,
    "simple": <SimpleProductInfo product={product}/>,
    "reviewed": 4
  }
  return componentMap[props.previewType];
}

export default ProductInfo;