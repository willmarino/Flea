import React from 'react';

class CategoryButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let { createSearch, category, loggedIn, history } = this.props;
    e.preventDefault();
    let url = loggedIn ? `/search_result?query=${category.name}` : `/anon/search_result?query=${category.name}`;
    createSearch(category.name)
      .then(() => {
        history.push(url);
      });
  }
  render(){
    let { category } = this.props;
    return(
      <div className="category-button">
        <p>{category.name}</p>
      </div>
    )
  }
}

export default CategoryButton;