import React from 'react';

class CartProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="cart-product-container">
        <div className="cart-product-shop-info">
          <div>
            {/* image */}
            {/* shop name */}
          </div>
          <div>
            <p>contact shop</p>
          </div>
        </div>
        <div className='cart-product-cart-info'>
          {/* product img */}
          <div>
            {/* product title */}
            {/* options and option details */}
            <div>
              <p>save for later</p>
              <p>remove</p>
            </div>
          </div>
          <div className="cart-show-product-quantity-and-price">
            <div>
              <p>Quant</p>
              {/* product price */}
            </div>
            <p>x many people have this item in cart</p>
          </div>
        </div>
        <div className='cart-show-order-details'>
          <div>
            <div>
              <div>
                <input type="checkbox"/>
              </div>
              <div>
                <p>This order is a gift</p>
                <p>Prices will not be shown on packing slip</p>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default CartProduct;