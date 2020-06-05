import React from 'react';
import Body from '../body/body';
import Header from '../../headers/header';
import Footer from '../../segments/footer';


class AnonMain extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main-container">
                <Header loggedIn={false}/>
                {/* <Body/> */}
                <Footer/>
            </div>
        )
    }
}

export default AnonMain;