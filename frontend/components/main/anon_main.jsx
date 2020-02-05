import React from 'react';
import { Route } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import AnonHeaderContainer from '../headers/anon_header_container';
import CategoryNav from '../category_nav/category_nav';
import ProductShowContainer from '../products/show/product_show_container';
import Advert from '../segments/advert';
import IndexRowContainer from '../products/row/index_row_container';
import CategoryRowContainer from '../products/row/category_row_container';
import Info from '../segments/info';
import Footer from '../segments/footer';
import ReviewSegmentContainer from '../segments/reviews_segment_container';


class AnonMain extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchShops();
        this.props.fetchReviews();
        this.props.fetchUsers();
        this.props.generateCats();
        this.props.fetchProducts();
    }

    render(){
        if(Object.keys(this.props.products).length === 0){
            return <p></p>;
        }
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
                    <Route exact path="/anon" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={0}/></ul>}/>
                    <Route exact path="/anon" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={1}/></ul>}/>
                    <Route exact path="/anon" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={2}/></ul>}/>
                    <Route exact path="/anon" render={() => <ul className="primary-index" id="cat-row"><CategoryRowContainer /></ul>}/>
                    <Route exact path="/anon" component={Info}/>
                    <Route exact path="/anon" component={ReviewSegmentContainer} />
                    <Route exact path="/anon" component={Footer} />
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );
    }
}

export default AnonMain;