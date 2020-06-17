import React from 'react';

class SearchTag extends React.Component{
  constructor(props){
    super(props);
    this.executeSearch = this.executeSearch.bind(this); 
  }
  executeSearch(e){
    e.preventDefault();
    let { loggedIn, tag, history } = this.props;
    let url = (this.props.loggedIn) ? `/search_result?query=${tag.tag_name}` : `/anon/search_result?query=${tag.tag_name}`;
    this.props.createSearch(tag.tag_name)
      .then(history.push(url));
  }
  render(){
    let { tag } = this.props;
    return(
      <li className='search-result-tag' key={tag.tag_name} onClick={this.executeSearch}>
        <p>{tag.tag_name}</p>
      </li>
    )
  }
}

export default SearchTag;