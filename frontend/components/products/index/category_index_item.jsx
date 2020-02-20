import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <li className="category cat-item">
        <Link to="/" className="link-container">
          <img src={this.props.p.photoURL} alt="" className="index-fake-image"/>
        </Link>
        <div className="category-details">
          {/* <p>{this.props.p.high_level_category}</p> */}
          <p>{this.props.categoryName}</p>
        </div>
      </li>
    );
  }

}

export default CategoryIndexItem;