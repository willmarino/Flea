import React from 'react';

class CategoryButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let { createSearch, category, loggedIn, history } = this.props;
    // e.preventDefault();
    let url = loggedIn ? `/search_result?query=${category.name}` : `/anon/search_result?query=${category.name}`;
    createSearch(category.name)
      .then(() => {
        history.push(url);
      });
  }
  render(){
    let { category } = this.props;
    return(
      <div className="category-button" onClick={this.handleClick}>
        <p>{category.name}</p>
        <div className="category-button-expanding-border"></div>
      </div>
    )
  }
}

export default CategoryButton;