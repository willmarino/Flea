import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // debugger;
        if(Object.keys(this.props.products).length === 0 || Object.keys(this.props.shops).length === 0){
            // debugger;
            this.props.fetchProducts();
            this.props.fetchShops();
        }
    }

    render(){
        let shop;
        let products;
        if(Object.keys(this.props.shops).length === 0 || Object.keys(this.props.products).length === 0){
            products = <p></p>;
        }else{
            products = this.props.products.map((p) => {
                return <IndexItem product={p} type={this.props.type} shop={this.props.shops[p.shop_id]} loggedIn={this.props.loggedIn} key={p.id}/>
            });
        }
        // debugger;
        return(
            <li>
                <h2 className="row-header">{this.props.category}</h2>
                <ul>
                    {products}
                </ul>
            </li>
        );
    }
}

export default IndexRow;