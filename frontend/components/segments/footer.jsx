import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="footer">
        <div >
          <p></p>
          <input type="text"/>
        </div>
        <div>
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
                
              </div>
            </div>

          </div>
        </div>
        <div>

        </div>
      </div>
    )
  }
}