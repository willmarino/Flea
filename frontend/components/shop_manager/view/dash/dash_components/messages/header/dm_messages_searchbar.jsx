import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

class DMMessagesSearchbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sampleSearch: "Search Your Messages",
      searchQuery: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  handleSubmit(){
    // search conversations
  }
  update(e){
    this.setState({ searchQuery: e.currentTarget.value });
  }
  render(){
    let floatingMsg;
    if(this.state.searchQuery.length !== 0){
      floatingMsg = this.state.searchQuery;
    }else{
      floatingMsg = this.state.sampleSearch;
    }
    return(
      <form className="DMM-searchbar-container" >
        <input type="text" placeholder="Search your messages" className="DMM-searchbar" value={this.state.searchQuery} onChange={this.update}/>
        {/* <p id="DMM-default-msg">{floatingMsg}</p> */}
        <button type="submit" id="DMM-submit">
          <AiOutlineSearch/>
        </button>
      </form>
    )
  }
}

export default DMMessagesSearchbar;