import React from 'react';

class CategoryIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <li className="category">
        {/* make this whole block a link to the category's index page */}
        <img src={this.props.p.photoURL} alt="" className="index-fake-image"/>
        <p>{this.props.p.high_level_category}</p>
      </li>
    );
  }

}

export default CategoryIndexItem;