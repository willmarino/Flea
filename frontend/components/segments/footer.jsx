import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    let { history } = this.props;
    if(history.location.pathname.startsWith('/shops-manager')){
      return null;
    }
    return(
      <div className="footer">
        <div className="top">
          <div className="footer-input">
            <p>Get fresh Flea trends and unique gift ideas delivered right to your inbox.</p>
            <input type="text"/>
            <p id="input-subscribe">Subscribe</p>
          </div>
        </div>
        <div id="middle">
          <div className="footer-column">
            <p className="footer-column-header">Shop</p>
            <p className="footer-column-tag">Gift cards</p>
            <p className="footer-column-tag">Etsy blog</p>
          </div>
          <div className="footer-column">
            <p className="footer-column-header">Sell</p>
            <p className="footer-column-tag">Sell on Etsy</p>
            <p className="footer-column-tag">Teams</p>
            <p className="footer-column-tag">Forums</p>
            <p className="footer-column-tag">Affiliates</p>
          </div>
          <div className="footer-column">
            <p className="footer-column-header">About</p>
            <p className="footer-column-tag">Etsy, Inc.</p>
            <p className="footer-column-tag">Policies</p>
            <p className="footer-column-tag">Investors</p>
            <p className="footer-column-tag">Careers</p>
            <p className="footer-column-tag">Press</p>
            <p className="footer-column-tag">Impact</p>
          </div>
          <div className="footer-column">
            <p className="footer-column-header">Help</p>
            <p className="footer-column-tag">Help Center</p>
            <p className="footer-column-tag" id="top-of-column-button">Privacy Settings</p>
            <a href="https://github.com/willmarino/Flea" target="_blank" className="footer-column-button">Download the Flea App</a>
            <div className="footer-icons" id="bottom-of-column-button">
              <i className="fa fa-instagram"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-pinterest"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </div>
        </div>
        <div id="bottom">
          <div>
            {/* <i className="fas fa-flag-usa"></i> */}
            <p>United States</p>
            <p id="bottom-left-mid">English</p>
            <p>USD</p>
          </div>
          <div>
            <p>Flea inc.</p>
            <p>Terms of User</p>
            <p>Privacy</p>
            <p>Interest Based Ads</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer);