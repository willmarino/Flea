import React from 'react';
import { Route } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import ProductShowContainer from '../products/show/product_show_container';
// import Advert from '../segments/advert';
// import IndexRowContainer from '../products/row/index_row_container';
// import CategoryRowContainer from '../products/row/category_row_container';
// import Info from '../segments/info';
// import Footer from '../segments/footer';
// import ReviewSegmentContainer from '../segments/reviews_segment_container';
import AnonIndexContainer from '../products/index/anon_index_container';

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
                    <Route exact path="/anon" component={AnonIndexContainer}/>
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );
    }
}

export default AnonMain;