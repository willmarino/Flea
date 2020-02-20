import React from 'react';

class MainSearchbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query : ''
    }
    
    this.executeSearch = this.executeSearch.bind(this);
    this.grabSuggestedSearches = this.grabSuggestedSearches.bind(this);
  }

  executeSearch(){
    this.props.createSearch(this.state.query);
  }

  grabSuggestedSearches(e){
    this.setState({ query : e.currentTarget.value});
    // and also grab filters
  }


  render(){
    return(
      <form onSubmit={this.executeSearch} className="search-and-icon" id="second">
        <input type="text" className="search" id="user-search" value={this.state.query} onChange={this.grabSuggestedSearches}/>
        <i className="fa fa-search" id="user-search-icon"></i>
        <input type="submit" value="a"/>
      </form>
    )
  }
}

export default MainSearchbar;