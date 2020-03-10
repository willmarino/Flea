import React from 'react';
import { Link } from 'react-router-dom';

class AddToCartForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      errors : null,
      options : null,
      modalStatus : null
    }
    this.capitalize = this.capitalize.bind(this);
    this.generateModals = this.generateModals.bind(this);
    this.setOptionValue = this.setOptionValue.bind(this);
    this.createMenu = this.createMenu.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clearModals = this.clearModals.bind(this);
    this.switchModal = this.switchModal.bind(this);
    this.modalCloser = null;
    this.targets = [];
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount(){
    this.createMenu();
  }

  componentDidUpdate(prevProps){
    if(prevProps.product !== this.props.product){
      this.createMenu();
    }
  }

  capitalize(str){
    let res = str[0].toUpperCase() + str.slice(1);
    return res;
  }

  createMenu(){
    let options = {};
    let modalStatus = {};
    for(let i = 0; i < this.props.product.options.length; i++){
      options[this.props.product.options[i]] = null;
      modalStatus[this.props.product.options[i]] = false;
    }
    this.setState({ options, modalStatus });
    this.generateModals();
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
    e.preventDefault();
    let modalState = this.state.modalStatus;
    this.clearModals();
    modalState[e.currentTarget.dataset.option] = true;
    this.setState({modalStatus : modalState});
  }

  clearModals(){
    let modalState = this.state.modalStatus;
    for(let i = 0; i < Object.keys(this.state.modalStatus).length; i++){
      let curKey = Object.keys(this.state.modalStatus)[i];
      modalState[curKey] = false;
    }
    this.setState({modalStatus : modalState});
  }

  closeModal(e){
    e.preventDefault();
    let modalState = this.state.modalStatus;
    modalState[e.currentTarget.dataset.option] = false;
    this.setState({modalStatus : modalState});
  }

  handleAddToCart(){
    let item_id = this.props.product.id;
    if(this.props.loggedIn){
      if(!this.props.cartItems[item_id]){
        this.setState({ errors : null });
        let chosenOps = [];
        let options = Object.values(this.state.options);
        for(let i = 0; i < options.length; i++){
          if(options[i] === null){
            chosenOps.push('none');
          }else{
            chosenOps.push(options[i]);
          }
        }
        this.props.createCartItem({item_id : item_id, chosen_options : chosenOps})
      }else{
        this.setState({ errors : 'you already have this item in your cart'})
      }
      this.setState({errors : 'You must be logged in'})
    }
  }
  
  render(){
    if(this.props.product.options.length !== 0 && !this.state.options){
      return <p></p>
    }
    let optionsMenu = [];

    if(!this.state.options){
      optionsMenu = null;
    }else{
      for(let i = 0; i < Object.keys(this.state.options).length; i++){
        let curKey = Object.keys(this.state.options)[i];
        let curOption = this.state.options[curKey];
        optionsMenu.push(
          <li key={curKey} className="dropdown-button-header">{this.capitalize(curKey)}</li>
        )
        optionsMenu.push(
          <li key={Math.round(Math.random() * 1000)} className='dropdown-button-container'>
            <button
              // type="button"
              onFocus={this.switchModal}
              onBlur={this.clearModals}
              data-option={`${curKey}`}
              className='dropdown-button'>
              {/* // value={(curOption === null) ? 'Select an option' : curOption}> */}
              {(curOption === null) ? 'Select an option' : curOption}
            </button>
            {(this.state.modalStatus[curKey]) ? this.modals[curKey] : <p></p>}
          </li>
        )
      }
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
        <div className="product-title">{this.capitalize(this.props.product.name)}</div>
        <div className="price">${this.props.product.price}</div>
        {/* <div className="bestseller" id="showpage"><p>Bestseller</p></div> */}
        <ul>
          {optionsMenu}
        </ul>
        <div>
          <p onClick={this.handleAddToCart} className="add-to-cart-button">Add to Cart</p>
          <p>{this.state.errors}</p>
        </div>
      </div>
    )
  }
}

export default AddToCartForm;