import React from 'react';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import AnonIndexContainer from '../products/index/anon_index_container';
import ProductShowContainer from '../products/show/product_show_container';

class AnonMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        let showPath = "/products/:prodId";
        return(
            <div>
                <div className="anon-main-top">
                    <AnonHeaderContainer/>
                    <ModalContainer/>
                    <CategoryNav/>
                </div>
                <div className="anon-main-mid">
                    {/* <AnonIndexContainer/> */}
                    <Route exact path="/anon" component={AnonIndexContainer}/>
                    <Route exact path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );
    }


}

export default AnonMain;