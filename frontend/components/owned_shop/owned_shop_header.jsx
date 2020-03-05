import React from 'react';

const OwnedShopHeader = (props) => {
  let { shop } = props;
  return(
    <div className="OSH-container">
      <div className="OSH-left">
        <div className="OSH-left-one">
          <img src={shop.photoURL} alt=""/>
        </div>
        <div className="OSH-left-two">
          <p className="OSH-left-two-top">{shop.name}</p>
          <div className="OSH-left-two-mid">
            <p>numsales</p>
            <p>on etsy since</p>
          </div>
          <div className="OSH-left-two-bottom">
            <div className="OSH-left-two-bottom-edit">
              <p>Edit Shop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="OSH-right">
        <p>Shop Owner</p>
        <img src={props.user.photoURL} alt=""/>
        <p>{props.user.username}</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default OwnedShopHeader;