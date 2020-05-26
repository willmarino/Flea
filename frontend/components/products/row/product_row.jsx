import React from 'react';
import IndexItem from '../index/index_item';

class ProductRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { rowOfProducts, type, loggedIn, category } = this.props;
        let productsList = rowOfProducts.map((p) => {
            return <IndexItem product={p} type={type} loggedIn={loggedIn} key={p.id}/>
        });
        return(
            <div>
                <div>
                    <p >{category}</p>
                    <p >See More</p>
                </div>
                <ul>
                    {productsList}
                </ul>
            </div>
        );
    }
}

export default ProductRow;