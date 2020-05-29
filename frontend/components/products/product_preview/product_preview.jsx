import React from 'react';
import SimpleProductPreview from './product_preview_types/simple_product_preview';

const ProductPreview = (props) => {
  let { product } = props;
  debugger;
  let componentMap = {
    "complex": 1,
    "mid": 2,
    "simple": <SimpleProductPreview product={product}/>,
    "reviewed": 4
  }
  return(
    componentMap[props.previewType]
  )
}

export default ProductPreview;