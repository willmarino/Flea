import React from 'react';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import AnonIndexContainer from '../products/anon_index_container';

class AnonMain extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <div className="anon-main-top">
                    <AnonHeaderContainer/>
                    <ModalContainer/>
                    <CategoryNav/>
                </div>
                <div className="anon-main-mid">
                    <AnonIndexContainer/>
                </div>
            </div>
        );
    }


}

export default AnonMain;