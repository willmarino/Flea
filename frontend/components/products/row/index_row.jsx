import React from 'react';
import IndexItem from '../index/index_item';

class IndexRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { products } = this.props;
        let productsList = products.map((p) => {
            return <IndexItem product={p} type={this.props.type} loggedIn={this.props.loggedIn} key={p.id}/> //shop={this.props.shops[p.shop_id]}
        });
        return(
            <> 
                <div className="row-header-container">
                    <p className="row-header">{this.props.category}</p>
                    <p className="row-header-sub">See More</p>
                </div>
                <li>
                    <ul>
                        {productsList}
                    </ul>
                </li>
            </>
        );
    }
}

export default IndexRow;