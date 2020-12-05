import React from 'react';

class MainSearchbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query : '',
      modal : null,
      modalShowing : false,
      selectedTerm : null
    }
    this.createModal = this.createModal.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
    this.grabSuggestedSearches = this.grabSuggestedSearches.bind(this);
    this.setModal = this.setModal.bind(this);
    this.changeHighlightedTerm = this.changeHighlightedTerm.bind(this);
    this.addEventListeners = this.addEventListeners.bind(this);

    this.addEventListeners();
  }

  componentDidMount(){
    this.props.fetchPopularSearches();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.searches.suggestedTerms !== this.props.searches.suggestedTerms){
      this.createModal();
    }else if(prevProps.searches.popularSearchIds !== this.props.searches.popularSearchIds){
      this.createModal();
    }else if(prevState.query !== '' && this.state.query === ''){
      this.createModal();
    }
  }

  addEventListeners(){ //40 = down, 38 = up
    window.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        this.changeHighlightedTerm(e.keyCode);
      }
    });
    // window.addEventListener('keypress', (e) => {
    //   if(e.keyCode === '38'){
    //     // move up
    //   }
    // });
  }

  changeHighlightedTerm(num){
    // if(num === 40){
    //   let selectedTerm = (this.state.selectedTerm !== null) ? this.state.selectedTerm : 'null';
    //   let terms = this.state.modal.props.children;
    //   if(selectedTerm === 'null'){
    //     selectedTerm = 0;
    //   }else{
    //     selectedTerm += 1;
    //   }

    //   terms[selectedTerm] = <li key={terms[selectedTerm]} className='suggested-search-term highlighted-term'>{terms[selectedTerm]}</li>;

    //   this.setState({ selectedTerm });
    // }else if(num === 38){

    // }
  }

  executeSearch(e){
    e.preventDefault();
    let url = (this.props.loggedIn) ? `/search_result?query=${this.state.query}` : `/anon/search_result?query=${this.state.query}`;
    this.props.createSearch(this.state.query)
      .then(this.props.history.push(url));
  }

  grabSuggestedSearches(e){
    this.setState({ query : e.currentTarget.value});
    if(e.currentTarget.value !== ''){
      this.props.fetchSuggestedTerms(e.currentTarget.value);
    }
  }

  createModal(){
    let { searches } = this.props;
    let popularTerms = searches.popularSearchIds.map((id) => searches[id]);
    let suggestedTerms = searches.suggestedTerms;
    let res = [];
    if(this.state.query !== '' && searches.suggestedTerms){
      for(let i = 0; i < suggestedTerms.length; i++){
        let term = suggestedTerms[i];
        res.push(
          <li key={term} className='suggested-search-term'>{term}</li>
        )
      }
    }else{
      res.push(
        <li key='poprightnow' className='suggested-search-header suggested-search-term'>Popular Right Now</li>
      )
      for(let i = 0; i < popularTerms.length; i++){
        let term = popularTerms[i].query;
        res.push(
          <li key={term} className='suggested-search-term'>{term}</li>
        );
      }
    }
    let modal = <ul className='search-suggested-modal'>{res}</ul>
    this.setState({ modal : modal });
  }

  setModal(bool){
    return () => this.setState({ modalShowing : bool })
  }

  render(){
    if(!this.props.searches.popularSearchIds){
      return <p></p>
    }
    let modal = (this.state.modalShowing) ? this.state.modal : null;
    return(
      <form onSubmit={this.executeSearch} className="search-and-icon" id="second">
        <input
          type="text"
          className="search"
          // id="user-search"
          value={this.state.query}
          onChange={this.grabSuggestedSearches}
          autoComplete='off'
          onFocus={this.setModal(true)}
          onBlur={this.setModal(false)}
          />
        <i className="fa fa-search" id="user-search-icon"></i>
        {modal}
        <input type="submit" value="" className='searchbar-submit'/>
      </form>
    )
  }
}

export default MainSearchbar;