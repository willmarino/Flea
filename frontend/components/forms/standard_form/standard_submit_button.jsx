import React from 'react';

class StandardSubmitButton extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    let { submitMessage, submitFunc } = this.props;
    return(
      <input className="standard-submit-button" type="submit" value={submitMessage} onClick={submitFunc}/>
    )
  }
}

export default StandardSubmitButton;