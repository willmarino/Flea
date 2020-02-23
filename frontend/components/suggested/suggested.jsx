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
    for(let i = 0; i < suggestedSearches.length; i++){
      let curTerm = suggestedSearches[i].tag_name;
      searches.push(
        <li onClick={this.handleSearch}
          data-val={curTerm}
          className="suggested-searches-list-item">{curTerm}</li>
      );
    }
    this.searchesList = <ul className="suggested-searches-list">{searches}</ul>;
  }

  render(){
    this.compileSearchesList();
    return(
      <div className='suggested-searches-container'>
        <div className='suggested-searches-subcontainer'>
          <p className='suggested-searches-header'>Welcome back, {this.props.currentUser.username}!</p>
          <div className='suggested-searches-subheaders-and-list'>
            <div className="suggested-searches-subheaders">
              <p className="suggested-searches-subheader" id="ss-subheader-one">Suggested Searches</p>
              <p className="suggested-searches-subheader" id="ss-subheader-two">Based on recent activity</p>
            </div>
            {this.searchesList}
          </div>
        </div>
      </div>
    )
  }
}

export default Suggested;