import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        if(!this.props.products){
            return <p></p>;
        }
        let products = this.props.products.map((p) => {
            return <IndexItem product={p} type={this.props.type} loggedIn={this.props.loggedIn} key={p.id}/> //shop={this.props.shops[p.shop_id]}
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