import React from 'react';
import DMListingsItem from './dm_listings_item';

class DMListingsMidMain extends React.Component{
  constructor(props){
    super(props);
    this.compileProducts = this.compileProducts.bind(this);
    this.compileProducts();
  }

  compileProducts(){
    this.productsList = [];
    let { products } = this.props;
    let productsArr = products.shopProductIds.map((id) => products[id]);
    productsArr.forEach((p) => {
      this.productsList.push(
        <DMListingsItem product={p}/>
      );
    })
  }

  render(){
    return(
      <div className="SML-mid-main">
        {/* <div className="SML-mid-main-header">
          <div className="SML-mid-main-header-one">
            <div className="SML-mid-main-header-box" id="SML-mid-main-box-one">
              <p>1</p>
              <p>2</p>
            </div>
          </div>
          <div className="SML-mid-main-header-two">
            <div className="SML-mid-main-header-box">
              <p>Renew</p>
            </div>
            <div className="SML-mid-main-header-box">
              <p>Deactivate</p>
            </div>
            <div className="SML-mid-main-header-box">
              <p>Delete</p>
            </div>
          </div>
          <div className="SML-mid-main-header-three">
            <div className="SML-mid-main-header-box">
              <p>Editing Options</p>
            </div>
          </div>
        </div> */}
        <div className="SML-mid-products">
          {this.productsList}
        </div>
      </div>
    )
  }
}

export default DMListingsMidMain;