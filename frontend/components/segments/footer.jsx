import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="footer">
        <div id="top">
          <p>subscribe</p>
          <input type="text"/>
        </div>
        <div id="middle">
          <div className="Shop">
            <p>Gift cards</p>
            <p>Etsy blog</p>
          </div>
          <div className="Sell">
            <p>Sell on Etsy</p>
            <p>Teams</p>
            <p>Forums</p>
            <p>Affiliates</p>
          </div>
          <div className="About">
            <p>Etsy, Inc.</p>
            <p>Policies</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Impact</p>
          </div>
          <div className="Help">
            <div>
              <p>Help Center</p>
              <p>Privacy Sttings</p>
            </div>
            <div>
              <button></button>
              <div>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-pinterest"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
              </div>
            </div>

          </div>
        </div>
        <div id="bottom">
          <button>
            <i className="fas fa-flag-usa"></i>
            <p>United States</p>
            <p>English</p>
            <p>USD</p>
          </button>
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

export default Footer;