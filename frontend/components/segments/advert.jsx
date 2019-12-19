import React from 'react';
// import Photo from '../../../app/assets/images/city.jpg';

class Advert extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="advert-whole">
                <p>Hey you, there's some pretty good stuff on here</p>
                <div className="advert-images">
                    {/* <div id="kids-gifts">
                        <div className="big-photo"></div>
                    </div>
                    <div> */}
                    <div id="gifts">
                        <div id="gift-one">

                        </div>
                        <div id="gift-two">

                        </div>
                    </div>
                    <div className="shop-now">
                        <div id="find-shop">

                        </div>
                        <div id="five-stars">

                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="advert-messages">
                    <div className="add-message" id="first">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>header1</p>
                        </div>
                        <p className="message">Quis
                            autem vel eum iure reprehenderit qui in ea voluptate velit
                            esse quam nihil molestiae consequatur? </p>
                    </div>
                    <div className="add-message">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>header2</p>
                        </div>
                        <p className="message">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    </div>
                    <div className="add-message" id="last">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>header3</p>
                        </div>
                        <p className="message">Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advert;