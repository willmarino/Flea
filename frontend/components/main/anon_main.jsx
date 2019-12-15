import React from 'react';
import { Route, Link } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import AnonIndexContainer from '../products/index/anon_index_container';
import ProductShowContainer from '../products/show/product_show_container';
import Advert from '../segments/advert';

class AnonMain extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let showPath = "/anon/products/:prodId";
        return(
            <div>
                <div className="anon-main-top">
                    <AnonHeaderContainer/>
                    <ModalContainer/>
                    <CategoryNav/>
                </div>
                <div className="anon-main-mid">
                    <Route exact path="/anon" component={Advert}/>
                    <Route exact path="/anon" component={AnonIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );
    }
}

export default AnonMain;