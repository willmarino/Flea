import React from 'react';

class Advert extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="advert-container">
                <p>Hey you, there's some pretty good stuff on here</p>
                <div className="advert-images">
                    <div id="gifts">
                        <div id="gift-one">
                            <p>Looking for a new pair of shoes?</p>
                            <p>Browse clothing</p>
                        </div>
                        <img src="https://flea-seeds.s3.amazonaws.com/stock_photos/intro_page/nature-red-forest-leaves-33109.jpg" alt="" id="gift-two"/>
                    </div>
                    <div className="shop-now">
                        <img src="https://flea-seeds.s3.amazonaws.com/stock_photos/intro_page/left-human-hand-2764675.jpg" alt="" id="find-shop" />
                        <div id="five-stars">
                            <button>Five Star Products</button>
                        </div>
                    </div>
                </div>
                <div className="advert-messages">
                    <div className="add-message" id="first">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>Looking for shoes?</p>
                        </div>
                        <p className="message">Quis
                            autem vel eum iure reprehenderit qui in ea? </p>
                    </div>
                    <div className="add-message">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>Gifts for the new Year?</p>
                        </div>
                        <p className="message">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam?</p>
                    </div>
                    <div className="add-message" id="last">
                        <div className="add-header">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p>Interested in modern art?</p>
                        </div>
                        <p className="message">Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advert;