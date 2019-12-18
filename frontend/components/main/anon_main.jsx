import React from 'react';
import { Route, Link } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import AnonIndexContainer from '../products/index/anon_index_container';
import ProductShowContainer from '../products/show/product_show_container';
import Advert from '../segments/advert';
import IndexRowContainer from '../products/row/index_row_container';
import CategoryRow from '../products/row/category_row';
import Info from '../segments/info';


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
                    <Route exact path="/anon" render={(props) => <ul className="primary-index"><IndexRowContainer {...props} type="complex" /></ul>}/>
                    <Route exact path="/anon" component={AnonIndexContainer}/>
                    <Route exact path="/anon" render={() => <ul className="primary-index"><CategoryRow/></ul>}/>
                    <Route exact path="/anon" component={Info}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );
    }
}

export default AnonMain;