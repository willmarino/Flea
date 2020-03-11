import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route } from 'react-router-dom';
import ProductShowContainer from '../products/show/product_show_container';
import UserIndexContainer from '../products/index/user_index_container';
import ShopShowContainer from '../shop/shop_show_container';
import CartShowContainer from '../cart/cart_show_container';
import ShopManagerLandingContainer from '../shop_manager/shop_manager_landing_container';
import SearchResultContainer from '../search/search_result_container';
import OwnedShopContainer from '../owned_shop/owned_shop_container';
import UserProfileContainer from '../user_profile/user_profile_container';

class UserMain extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        if(this.props.location.pathname.includes("shops-manager")){
            return <ShopManagerLandingContainer/>;
        }
        let showPath = "/products/:prodId";
        let shopShowPath = "/shops/:shopId";
        let cartPath = "/cart";
        let searchResultPath = "/search_result";
        let userProfilePath = "/profiles/:userId";
        return(
            <div>
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    <Route exact path="/" component={UserIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                    <Route path={shopShowPath} component={ShopShowContainer}/>
                    <Route exact path={cartPath} component={CartShowContainer}/>
                    <Route path={searchResultPath} component={SearchResultContainer}/>
                    <Route path="/ownedshops/:prodId" component={OwnedShopContainer}/>
                    <Route exact path={userProfilePath} component={UserProfileContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;