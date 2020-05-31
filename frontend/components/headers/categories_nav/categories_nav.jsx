import React from 'react';
import CategoryButtonContainer from './category_button/category_button_container';

class CategoriesNav extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    debugger;
    this.props.fetchAllCategories();
  }
  render(){
    let categories = Object.values(this.props.categories);
    debugger;
    if(categories.length === 0){
      return <p></p>
    }
    debugger;
    return(
      <ul className="categories-nav-container">
        {categories.map((category) => {
          return <CategoryButtonContainer category={category}/>
        })}
      </ul>
    )
  }
}

export default CategoriesNav;