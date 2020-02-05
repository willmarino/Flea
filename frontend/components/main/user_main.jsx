import React from 'react';
import UserHeaderContainer from '../headers/user_header_container';
import CategoryNav from '../category_nav/category_nav';
import { Route } from 'react-router-dom';
import ProductShowContainer from '../products/show/product_show_container';
import CategoryRowContainer from '../products/row/category_row_container';
import IndexRowContainer from '../products/row/index_row_container';
import Footer from '../segments/footer';
import Info from '../segments/info';
import ReviewSegmentContainer from '../segments/reviews_segment_container';
import UserSubheaderContainer from '../headers/user_subheader_container';

class UserMain extends React.Component{
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
        let showPath = "/products/:prodId";
        return(
            <div>
                <div className="user-main-top">
                    <UserHeaderContainer/>
                    <CategoryNav/>
                </div>
                <div className="user-main-mid">
                    {/* <Route exact path="/" component={UserSubheaderContainer}/> */}
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={0} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={1} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index"><IndexRowContainer type="simple" rowId={2} /></ul>}/>
                    <Route exact path="/" render={() => <ul className="primary-index" id="cat-row"><CategoryRowContainer/></ul>}/>
                    <Route exact path="/" component={ReviewSegmentContainer} />
                    <Route exact path="/" component={Info} />
                    <Route exact path="/" component={Footer} />
                    <Route path={showPath} component={ProductShowContainer}/>
                </div>
            </div>
        );

    }
}

export default UserMain;