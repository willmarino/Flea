import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route, Link } from 'react-router-dom';
import AnonIndexContainer from '../products/index/anon_index_container';
import ProductShowContainer from '../products/show/product_show_container';
import CategoryRowContainer from '../products/row/category_row_container';
import IndexRowContainer from '../products/row/index_row_container';
import Footer from '../segments/footer';
import Info from '../segments/info';
import ReviewSegmentContainer from '../segments/reviews_segment_container';
import UserSubheaderContainer from '../headers/user_subheader_container';

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
                    <Route exact path="/" component={UserSubheaderContainer}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="complex" /></ul>}/>
                    <Route exact path="/" component={AnonIndexContainer}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><CategoryRowContainer/></ul>}/>
                    <Route exact path="/" component={ReviewSegmentContainer} />
                    <Route exact path="/" component={Info} />
                    <Route exact path="/" component={Footer} />
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;