import React from 'react';
import { Link } from 'react-router-dom';

class AddToCartForm extends React.Component{
  constructor(props){
    super(props);

    let options = {};
    let modalStatus = {};
    for(let i = 0; i < this.props.product.options.length; i++){
      options[this.props.product.options[i]] = null;
      modalStatus[this.props.product.options[i]] = false;
    }
    this.state = {
      errors : null,
      options,
      modalStatus
    }
    this.topLevelDoc = this.props.topLevelDoc;
    this.generateModals = this.generateModals.bind(this);
    this.setOptionValue = this.setOptionValue.bind(this);
    this.generateModals();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.switchModal = this.switchModal.bind(this);
    this.modalCloser = null;
    this.targets = [];
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.loggedIn) this.props.addItemToCart(this.props.product, this.props.cart.id);
  }

  generateModals(){
    this.modals = {};
    for(let i = 0; i < this.props.product.options.length; i++){ // iterating through each option
      let curOption = this.props.product.options[i]; // size, color
      let optionDetails = this.props.product.options_details; // array with nested arrays containing options for size and color
      let possibleOptions = []; // array which will contain li's for each option detail, which will be placed in this.modals at a key of the curOption (size, color), on line 45
      for(let j = 0; j < optionDetails[i].length; j++){ // iterating through each detail for each option
        let curOptionDetail = optionDetails[i][j]; // blue, small, purple, large
        possibleOptions.push(
          <li onClick={this.setOptionValue(curOption, curOptionDetail)} key={Math.round(Math.random() * 1000)}>
            {optionDetails[i][j]}
          </li>
        )
      }
      possibleOptions.unshift(
        <li onClick={this.setOptionValue(curOption, null)} key={Math.round(Math.random() * 1000)}>
          Please select a {curOption}
        </li>
      )
      this.modals[curOption] = <ul className='dropdown-menu'>{possibleOptions}</ul>;
    }
  }

  setOptionValue(option, val){
    return e => {
      let options = this.state.options;
      options[option] = val;
      this.setState({options : options});
      let modalStatus = this.state.modalStatus;
      modalStatus[option] = false;
      this.setState({modalStatus : modalStatus});
    }
  }
  switchModal(e){
    e.preventDefault();
    if(this.state.modalStatus[e.currentTarget.dataset.option]){
      this.closeModal(e);
    }else{
      this.openModal(e);
    }
  }
  

  openModal(e){
    // set all modals to closed, then open the one which was selected
    e.preventDefault();
    let modalState = this.state.modalStatus;
    // for(let i = 0; i < Object.keys(this.state.modalStatus).length; i++){
    //   let curKey = Object.keys(this.state.modalStatus)[i];
    //   modalState[curKey] = false;
    // }
    this.clearModals();
    modalState[e.currentTarget.dataset.option] = true;
    this.setState({modalStatus : modalState});
    // this.addEventListener('mousedown', this.clearModals);
  }

  clearModals(){
    let modalState = this.state.modalStatus;
    for(let i = 0; i < Object.keys(this.state.modalStatus).length; i++){
      let curKey = Object.keys(this.state.modalStatus)[i];
      modalState[curKey] = false;
    }
    this.setState({modalStatus : modalState});
    // this.removeEventListener('mousedown', this.clearModals);
  }

  closeModal(e){
    e.preventDefault();
    let modalState = this.state.modalStatus;
    modalState[e.currentTarget.dataset.option] = false;
    this.setState({modalStatus : modalState});
  }
  
  render(){

    let optionsMenu = [];
    for(let i = 0; i < Object.keys(this.state.options).length; i++){
      let curKey = Object.keys(this.state.options)[i];
      let curOption = this.state.options[curKey];
      optionsMenu.push(
        <li key={Math.round(Math.random() * 1000)} className='dropdown-button-container'>
          <button onClick={this.switchModal} data-option={`${curKey}`} className='dropdown-button'>
            {(curOption === null) ? 'Select an option' : curOption}
          </button>
          {(this.state.modalStatus[curKey]) ? this.modals[curKey] : <p></p>}
        </li>
      )
    }
    let showPath;
    if(this.props.loggedIn){
      showPath = `/shops/${this.props.shop.id}`;
    }else{
      showPath = `/anon/shops/${this.props.shop.id}`;
    }
    return(
      <div className="buy-product">
        <div className="top-bar">
          <Link to={showPath}><div className="gray-text">{this.props.shop.name}</div></Link>
          <div className="stars">{this.props.productAvg}</div>
          <div className="review_count">({this.props.pCount})</div>
        </div>
        <div className="product-title">{this.props.product.name}</div>
        <div className="price">{this.props.product.price}</div>
        <div className="bestseller" id="showpage"><p>Bestseller</p></div>
        <ul>
          {optionsMenu}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value='Add To Cart'></input>
          <p>{this.state.errors}</p>
        </form>
      </div>
    )
  }
}

export default AddToCartForm;