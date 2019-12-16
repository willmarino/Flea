import React from 'react';

class CategoryIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <li className="Category">
        <div className="index-fake-image"></div>
          <p>{this.props.category}</p>
      </li>
    );
  }

}

export default CategoryIndexItem;