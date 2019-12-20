import React from 'react';

class Info extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="info-whole">
        <div className="info-top">
          <p>What is Flea?</p>
          <p>I'm really not sure, you figure it out</p>
        </div>
        <div className="info-mid">
          <div id="info-mid-one">
            <p className="info-header">Unique community</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi.
            </p>
          </div>
          <div id="info-mid-two">
            <p className="info-header">Support independent creators</p>
            <p>Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quo voluptas?
            </p>
          </div>
          <div id="info-mid-three">
            <p className="info-header">Peace of mind</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
        <div className="info-bottom">
          <p>Have questions?</p>
          <button>Me too</button>
        </div>
      </div>
    );
  }
}

export default Info;