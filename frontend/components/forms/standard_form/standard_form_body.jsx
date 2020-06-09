// import React from 'react';
// import StandardFormInput from './standard_form_input';
// import StandardSubmitButton from './standard_submit_button';
// import LoginExtra from '../../modal/login_and_register/login/login_components/login_mid';

// const StandardFormBody = (props) => {
//   let { inputs, submitMessage, updateFunc, values, submitFunc, extra } = props;
//   let loginExtra;
//   if(extra === 'login'){
//     loginExtra = <LoginExtra/>;
//   }
//   let inputForms = inputs.map((inputName, i) => {
//     return (
//       <StandardFormInput
//         value={values[i]}
//         updateFunc={updateFunc(inputName)}
//         label={inputName}
//         hidden={inputName === 'password'}/>)
//   })
//   return(
//     <div className='standard-form-body-container'>
//       {inputForms}
//       {loginExtra}
//       <StandardSubmitButton submitFunc={submitFunc} submitMessage={submitMessage}/>
//     </div>
//   )
// }

// export default StandardFormBody;