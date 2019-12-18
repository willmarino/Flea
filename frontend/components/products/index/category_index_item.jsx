import React from 'react';

class CategoryIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      // <li className="Category">
      //   <div className="index-fake-image"></div>
      //     <p>{this.props.category}</p>
      // </li>

      <li className="Category">
        <img src={this.props.p.photoURL} alt="" className="index-fake-image"/>
        <p>{this.props.p.high_level_category}</p>
      </li>
    );
  }

}

export default CategoryIndexItem;