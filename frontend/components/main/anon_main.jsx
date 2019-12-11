import React from 'react';
// import UsersIndexContainer from '../users/users_index_container'
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';

class AnonMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <AnonHeaderContainer/>
                <ModalContainer/>
            </div>
        );
    }


}

export default AnonMain;