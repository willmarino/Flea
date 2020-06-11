import React from 'react';

// class StandardSubmitButton extends React.Component{
//   constructor(props){
//     super(props)

//   }
// render(){
const StandardSubmitButton = (props) => {
  let { submitMessage, submitFunc, info } = props;
  let handleSubmit = (info) => {
    return (e) => {
      submitFunc(info);
    };
  };
  return(
    <input className="standard-submit-button" type="submit" value={submitMessage} onClick={handleSubmit(info)}/>
  )
}
// }

export default StandardSubmitButton;