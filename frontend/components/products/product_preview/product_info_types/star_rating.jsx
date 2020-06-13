import React from 'react';

const StarRating = (props) => {
  let { rating } = props;
  let stars = [];
    while(stars.length < rating){
      stars.push(<i className="fa fa-star" key={stars.length}></i>)
    }
  return <div>{stars}</div>;
}

export default StarRating;