import React from 'react';
// import x from '../../../app/assets/images/headphone.jpg'
class Info extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="info-whole">
        {/* <img src="../../../app/assets/images/headphone.jpg" alt="" className="info-segment-image"/> */}
        <div className='info-content-container'>
          <div className="info-top">
            <p className='info-main-header'>What is Flea?</p>
            <p>Sed ut perspiciatis unde omnis iste natus error</p>
          </div>
          <div className="info-mid">
            <div id="info-mid-one">
              <p className="info-header">Unique community</p>
              <p className="info-message">Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
              </p>
            </div>
            <div id="info-mid-two">
              <p className="info-header">Support independent creators</p>
              <p className="info-message">Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                quo voluptas?
              </p>
            </div>
            <div id="info-mid-three">
              <p className="info-header">Peace of mind</p>
              <p className="info-message">Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
          <div className='info-bottom'>
            <p>Have questions?</p>
            <button>Help Center</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;