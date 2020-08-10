import React from 'react';

class CustomCheckbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
  }
  render(){
    let classNames='custom-checkbox';
    if(this.state.checked){
      classNames += ' custom-checkbox-focused'
    }
    return(
      <div className={classNames} onClick={() => { this.setState({ checked: !this.state.checked }) }}>

      </div>
    )
  }
}

export default CustomCheckbox;