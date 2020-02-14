import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route } from 'react-router-dom';
import ProductShowContainer from '../products/show/product_show_container';
import UserSubheaderContainer from '../headers/user_subheader_container';
import UserIndexContainer from '../products/index/user_index_container';
import ShopShowContainer from '../shop/shop_show_container';

class UserMain extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // this.props.fetchHappyReviews();
        // this.props.fetchIndex();
        // this.props.fetchUserCart(this.props.user.id);
    }


    render(){
        // if(!this.props.products.index){
        //     return <p></p>
        // }
        let showPath = "/products/:prodId";
        let shopShowPath = "/shops/:shopId";
        return(
            <div>
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    {/* <Route exact path="/" component={UserSubheaderContainer}/> */}
{/*                     
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={0} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={1} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={2} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index" id="cat-row"><CategoryRowContainer/></ul>}/>
                    <Route exact path="/" component={ReviewSegmentContainer} />
                    <Route exact path="/" component={Info} />
                    <Route exact path="/" component={Footer} /> */}
                    <Route exact path="/" component={UserIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                    <Route path={shopShowPath} component={ShopShowContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;