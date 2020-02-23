import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.products || !this.props.categories ){
            return <p></p>;
        }
        let products = this.props.products.map((p) => {
            return <IndexItem product={p} type={this.props.type} loggedIn={this.props.loggedIn} key={p.id}/> //shop={this.props.shops[p.shop_id]}
        });
        debugger;
        let category = this.props.categories[this.props.products[0].high_level_category].name;
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