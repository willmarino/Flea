import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route } from 'react-router-dom';
import ProductShowContainer from '../products/show/product_show_container';
import UserSubheaderContainer from '../headers/user_subheader_container';
import UserIndexContainer from '../products/index/user_index_container';
import ShopShowContainer from '../shop/shop_show_container';
import CartShowContainer from '../cart/cart_show_container';
import ShopManagerLandingContainer from '../shop_manager/shop_manager_landing_container';

class UserMain extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllCategories();
    }

    render(){
        if(Object.keys(this.props.categories).length === 0){
            return <p></p>;
        }
        let shopManagerPath= "/shops-manager";
        if(this.props.location.pathname === shopManagerPath){
            return <ShopManagerLandingContainer/>;
        }
        let showPath = "/products/:prodId";
        let shopShowPath = "/shops/:shopId";
        let cartPath = "/cart";
        return(
            <div>
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    {/* <Route exact path="/" component={UserSubheaderContainer}/> */}
                    <Route exact path="/" component={UserIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                    <Route path={shopShowPath} component={ShopShowContainer}/>
                    <Route exact path={cartPath} component={CartShowContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;