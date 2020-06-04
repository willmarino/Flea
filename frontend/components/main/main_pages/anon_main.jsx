import React from 'react';
import Body from '../body/body';
import Header from '../../headers/header';
// import AnonHeaderContainer from '../../headers/anon_header_container';


class AnonMain extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     allReady: false
        // }
        // this.anonMainSetReady = this.anonMainSetReady.bind(this);
    }
    // anonMainSetReady(){
    //     this.setState({ allReady: true});
    //     this.props.mainSetReady();
    // }
    render(){
        return(
            <div className="main-container">
                <Header loggedIn={false}/>
                {/* <Body mainSetReady={this.mainSetReady}/> */}
                <Body/>
                {/* <Footer/> */}
                {/* <AnonHeaderContainer/> */}
            </div>
        )
    }
}

export default AnonMain;