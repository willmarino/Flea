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
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    
                </div>
            </div>
        );

    }
}

export default UserMain;