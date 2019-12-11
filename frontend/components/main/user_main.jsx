import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';


class UserMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){

        return(
            <div>
                <UserHeaderContainer/>
            </div>
        );

    }
}

export default UserMain;