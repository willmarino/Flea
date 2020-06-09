import React from 'react';

const LoginFormInfo = () => {
  let icons = [<i className="fa fa-google"></i>, <i className="fa fa-facebook"></i>, <i class="fa fa-apple"></i>]
  let iconNames = ['Google', 'Facebook', 'Apple'];
  let iconsContainer = icons.map((el, i) => {
    return (
      <div className='connect-with-container'>
        {el}
        <p className='connect-with-name'>{iconNames[i]}</p>
      </div>
    )
  })
  return(
    <div className='login-form-info-container'>
      <div id='trouble-signing-in'>
        <p>Trouble Signing In?</p>
      </div>
      <div className="message-and-border-container">
        <div id="or-message">
          <p>OR</p>
        </div>
        <div className='mid-border-behind'>
        </div>
      </div>
      {iconsContainer}
      <p id='login-info-warning'>
        By clicking Sign in or Continue with Google, Facebook, or Apple, 
        you agree to Etsy's Terms of Use and Privacy Policy. 
        Etsy may send you communications; 
        you may change your preferences in your account settings.
         We'll never post without your permission.
      </p>
    </div>
  )
}

export default LoginFormInfo;