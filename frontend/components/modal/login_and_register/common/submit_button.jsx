import React from 'react';

class SubmitButton extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    let { message, submitHandler } = this.props;
    return(
      <input type="submit" value={message} onClick={submitHandler}/>
    )
  }
}

export default SubmitButton;