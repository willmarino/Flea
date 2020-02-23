import React from 'react';

class Suggested extends React.Component{
  constructor(props){
    super(props);

    this.searchesList = [];
    this.handleSearch = this.handleSearch.bind(this);
    this.compileSearchesList = this.compileSearchesList.bind(this);
  }

  handleSearch(e){
    this.props.fetchSearchMain(e.currentTarget.dataset.val);
  }

  compileSearchesList(){
    let { suggestedSearches } = this.props;
    let searches = [];
    // this.props.suggestedSearches
    for(let i = 0; i < suggestedSearches.length; i++){
      let curTerm = suggestedSearches[i].tag_name;
      searches.push(
        <li onClick={this.handleSearch} data-val={curTerm}>{curTerm}</li>
      );
    }
    this.searchesList = <ul className="suggested-searches-list">{searches}</ul>;
  }

  render(){
    this.compileSearchesList();
    return(
      <div className='suggested-searches-container'>
        <p>Hello, {this.props.currentUser.username}</p>
        <div>
          <div>
            <p>Suggested Searches</p>
            <p>Based on recent activity</p>
          </div>
          {this.searchesList}
        </div>

      </div>
    )
  }
}

export default Suggested;