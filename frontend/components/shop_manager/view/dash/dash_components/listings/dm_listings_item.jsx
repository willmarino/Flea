import React from 'react';
import { Link } from 'react-router-dom';

const DMListingsItem = (props) => {
  let productUpdateUrl = `/shops-manager/listings/${props.product.id}/update`;
  return(
    <div className="DM-listings-item">
      <Link to={productUpdateUrl}>
        <img src={props.product.photoURL} alt=""/>
      </Link>
      <div>
        <Link to={productUpdateUrl}>
        <div className="DM-listings-item-details">
          <p>{props.product.name}</p>
          <div>
            <p>{props.product.stock_amt}</p>
            <p>${props.product.price}</p>
          </div>
          <div>
            <p>renewal date</p>
          </div>
        </div>
        </Link>
        <div className="DM-listings-item-selection">
          <div>
            <input type="checkbox"/>
          </div>
          <div>
            <p>star!!!</p>
          </div>
          <div>
            <p>gear!!!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DMListingsItem;