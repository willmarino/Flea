import React from 'react';
import Body from '../body/body';
import AnonHeaderContainer from '../../headers/anon_header_container';
import Header from '../../headers/header';

const AnonMain = () => {
    return(
        <div className="main-container">
            <Header loggedIn={false}/>
            {/* <AnonHeaderContainer/> */}
            <Body/>
            {/* <Footer/> */}
        </div>
    )
}

export default AnonMain;