import React from 'react';

class MainSearchbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query : '',
      modal : null,
      modalShowing : false
    }
    this.createModal = this.createModal.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
    this.grabSuggestedSearches = this.grabSuggestedSearches.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchPopularTerms();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.suggestedTerms !== this.props.suggestedTerms){
      this.createModal();
    }else if(prevProps.popularTerms !== this.props.popularTerms){
      this.createModal();
    }else if(prevState.query !== '' && this.state.query === ''){
      this.createModal();
    }
  }

  executeSearch(){
    this.props.createSearch(this.state.query);
  }

  grabSuggestedSearches(e){
    this.setState({ query : e.currentTarget.value});
    if(e.currentTarget.value !== ''){
      this.props.fetchSuggestedTerms(e.currentTarget.value);
    }
  }

  createModal(){
    let { popularTerms, suggestedTerms } = this.props;
    let res = [];
    if(this.state.query !== '' && this.props.suggestedTerms){
      for(let i = 0; i < suggestedTerms.length; i++){
        let term = suggestedTerms[i].tag_name;
        res.push(
          <li key={term}>{term}</li>
        )
      }
    }else{
      for(let i = 0; i < popularTerms.length; i++){
        let term = popularTerms[i].query;
        res.push(
          <li key={term}>{term}</li>
        );
      }
    }
    let modal = <ul className='search-suggested-modal'>{res}</ul>
    debugger;
    this.setState({ modal : modal });
  }

  setModal(bool){
    return () => this.setState({ modalShowing : bool })
  }

  render(){
    if(!this.props.popularTerms){
      return <p></p>
    }
    let modal = (this.state.modalShowing) ? this.state.modal : null;
    return(
      <form onSubmit={this.executeSearch} className="search-and-icon" id="second">
        <input
          type="text"
          className="search"
          id="user-search"
          value={this.state.query}
          onChange={this.grabSuggestedSearches}
          autoComplete='off'
          onFocus={this.setModal(true)}
          onBlur={this.setModal(false)}
          />
        <i className="fa fa-search" id="user-search-icon"></i>
        {modal}
        <input type="submit" value=""/>
      </form>
    )
  }
}

export default MainSearchbar;