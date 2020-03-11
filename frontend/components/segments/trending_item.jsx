import React from 'react';
import { Link } from 'react-router-dom';

const TrendingItem = (props) => {
  let showPath = '/';
  if(props.header.includes('Product')){
    showPath += 'products/';
  }else if(props.header.includes('Shop')){
    showPath += 'shops/';
  }
  showPath += props.item.id;
  if(!props.loggedIn){
    showPath = '/anon' + showPath;
  }
  return(
    <div className="trending-item-container">
      <Link to={showPath}>
      <img src={props.item.photoURL} alt="" className="trending-item-image"/>
      <div className="trending-item-info">
        <p id="trending-item-info-item-name">{props.item.name}</p>
        <p>{props.header}</p>
      </div>
      </Link>
    </div>
  )
}

export default TrendingItem;