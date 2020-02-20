import React from 'react';
import { Route } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import ProductShowContainer from '../products/show/product_show_container';
import AnonIndexContainer from '../products/index/anon_index_container';
import ShopShowContainer from '../shop/shop_show_container';

class AnonMain extends React.Component{
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
        let showPath = "/anon/products/:prodId";
        let shopShowPath = "/anon/shops/:shopId";
        return(
            <div>
                <div className="anon-main-top">
                    <AnonHeaderContainer/>
                    <ModalContainer/>
                    <CategoryNav/>
                </div>
                <div className="anon-main-mid">
                    <Route exact path="/anon" component={AnonIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                    <Route path={shopShowPath} component={ShopShowContainer}/>
                </div>
            </div>
        );
    }
}

export default AnonMain;