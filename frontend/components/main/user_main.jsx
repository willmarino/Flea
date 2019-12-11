import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';

class UserMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){

        return(
            <div>
                <UserHeaderContainer/>
                <CategoryNav/>
            </div>
        );

    }
}

export default UserMain;