import React from 'react';

const ProductPrice = (props) => {
  let { product } = props;
  let priceOptions;
  if(product.sale){
    let preSalePrice = product.price;
    let postSalePrice = (product.price - (product.price * product.sale)).toFixed(2);
    let salePercentage = `(%${Math.round(product.sale * 100)} off)`;
    priceOptions = (
      <div className="spp-price">
        <p id="spp-pre-sale-price">${postSalePrice}</p>
        <div id="spp-post-sale-info">
          <div id="spp-post-sale-info-price">
            <p>${preSalePrice}</p>
            <p id="dash"></p>
          </div>
          <p id="spp-post-sale-info-percentage">{salePercentage}</p>
        </div>
      </div>
    )
  }else{
    priceOptions = (
      <div className="spp-price">
        <p id="spp-pre-sale-price">${product.price}</p>
      </div>
    )
  }
  return priceOptions;
}

export default ProductPrice;