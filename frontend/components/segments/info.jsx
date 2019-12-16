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
            <p>Header 1</p>
            <p>text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1
              text 1 text 1 text 1 text 1 text 1 text 1
            </p>
          </div>
          <div id="info-mid-two">
            <p>Header 1</p>
            <p>text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2
              text 2 text 2 text 2 text 2 text 2 text 2
            </p>
          </div>
          <div id="info-mid-three">
            <p>Header 3</p>
            <p>text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3
              text 3 text 3 text 3 text 3 text 3 text 3
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