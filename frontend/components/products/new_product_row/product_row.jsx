import React from 'react';

import IndexItem from '../index/index_item';

class ProductRow extends React.Component{
    constructor(props){
        super(props);

        this.category = this.props.categories[(Math.round(Math.random() * 8))]
    }

    componentDidMount(){
        let categoryObj = {category: this.category};
        if(this.props.type !== "recent"){
            this.props.productsByCategory(categoryObj);
        }else{
            this.props.fetchRecentlyViewed(this.props.currentUser.id);
        }
    }

    render(){
        if(this.props.type !== "recent"){
            if(!this.props.products[this.category]){
                return <p>Loading category</p>
            }
        }else if(this.props.type === "recent"){
            if(!this.props.products["recently_viewed"]){
                return <p>Loading Recents</p>
            }
        }

        let products;
        let i = 0;
        let label;

        if(this.props.type !== "recent"){
            label = this.category;
            products = Object.values(this.props.products[this.category]).map((product) => {
                i += 1;
                return <IndexItem product={product} type="simple" loggedIn={this.props.loggedIn} key={i}/>
            });
        }else{
            label = "Recently Viewed";
            products = Object.values(this.props.products["recently_viewed"]).map((product) => {
                i += 1
                return <IndexItem product={product} type="simple" loggedIn={this.props.loggedIn} shop={this.props.shops[product.shop_id]} key={i}/>
            });
        }
        return(
            <>  
                <div className="header-container">
                    <h2 className="row-header">{label}</h2>
                </div>
                <ul className="product-row">
                    {products}
                </ul>
            </>
        );
    }
}

export default ProductRow;