import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // debugger;
        this.props.fetchProducts();
        this.props.fetchShops();
    }

    render(){

        // if(this.props.type === "c"){

        // }

        let shop;
        let products;
        if(Object.keys(this.props.shops).length === 0 || Object.keys(this.props.products).length === 0){
            products = <p></p>;
        }else{
            products = this.props.products.map((p) => {
                return <IndexItem product={p} type={this.props.type} shop={this.props.shops[p.shop_id]} key={p.id}/>
            });
        }
        // debugger;
        return(
            <li>
                <h2>{this.props.category}</h2>
                <ul>
                    {products}
                </ul>
            </li>
        );
    }
}

export default IndexRow;