import React from 'react';

// when closed this dropdown displays as a p tag with a background on hover
// on click, the modal is opened
// on another click, the modal closes, and the header is switched

class WhiteDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      options: this.props.options
    }
    this.compileOptions = this.compileOptions.bind(this);
    this.reorderOptions = this.reorderOptions.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.compileOptions();
  }

  handleClose(){

  }

  handleClick(e){

    let clickedElement = e.currentTarget;
    let options = this.state.options;
    this.DDHeader = e.currentTarget.dataset.option;
    for(let i = 0; i < options.length; i++){
      let currentOption = options[i];
      if(currentOption === clickedElement){
        options[i] = <li className='WD-option'
        key={this.DDHeader}
        data-idx={i}
        data-option={this.DDHeader}
        onClick={this.handleClose}>
          {DDHeader}</li>
      }
    }

    this.DDHeader = clickedElement.dataset.option
    // <li className='WD-header'
    //     key={this.DDHeader}
    //     data-idx={i}
    //     data-option={this.DDHeader}
    //     onClick={this.handleClose}>
    //       {DDHeader}</li>

  }

  reorderOptions(i){

  }

  compileOptions(){
    let options = this.state.options;
    let modalOptions = [];
    this.DDHeader = options[0];
    modalOptions.push(
      <li className='WD-header'
        key={this.DDHeader}
        data-idx={i}
        data-option={this.DDHeader}
        onClick={this.handleClose}>
          {DDHeader}</li>
    )
    for(let i = 1; i < options.length; i++){
      let currentOption = options[i];
      modalOptions.push(
        <li className='WD-option'
        key={currentOption} 
        data-idx={i}
        data-option={currentOption}
        onClick={this.handleClick}>
          {currentOption}</li>
      )
    }
    this.modal = <ul className='WD-modal'>
      {modalOptions}
    </ul>
  }

  render(){
    let display;
    if(this.state.open){
      display = this.modal;
    }else{
      display = <p onClick={this.handleClick}>{this.DDHeader}</p>
    }
    return(
      <p></p>
    );
  }
}

export default WhiteDropdown;