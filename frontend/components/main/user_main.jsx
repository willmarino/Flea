import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route, Link } from 'react-router-dom';
import AnonIndexContainer from '../products/index/anon_index_container';
import ProductShowContainer from '../products/show/product_show_container';
import CategoryRow from '../products/row/category_row';
import IndexRowContainer from '../products/row/index_row_container';

class UserMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        let showPath = "/products/:prodId";
        return(
            <div>
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="complex" /></ul>}/>
                    <Route exact path="/" component={AnonIndexContainer}/>
                    {/* <Route exact path="/" render={() => <ul className="primary-index"><CategoryRow/></ul>}/> */}
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;