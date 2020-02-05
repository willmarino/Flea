import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        
    }

    render(){
        let shop;
        let products;
        if(!this.props.products){
            return <p></p>;
        }
        if(Object.keys(this.props.shops).length === 0 || this.props.products.length === 0){
            return <p></p>;
        }
        products = this.props.products.map((p) => {
            return <IndexItem product={p} type={this.props.type} shop={this.props.shops[p.shop_id]} loggedIn={this.props.loggedIn} key={p.id}/>
        });
        let category = this.props.products[0].high_level_category;
        return(
            <>
                <h2 className="row-header">{category}</h2>
                <li>
                    <ul>
                        {products}
                    </ul>
                </li>
            </>
        );
    }
}

export default IndexRow;