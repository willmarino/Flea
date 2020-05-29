import React from 'react';
// import IndexItem from '../index/index_item';
import ProductPreview from '../product_preview/product_preview';

class ProductRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { rowOfProducts, type, loggedIn, category } = this.props;
        let productsList = rowOfProducts.map((product) => {
            // return <IndexItem product={p} type={type} loggedIn={loggedIn} key={p.id}/>
            return <ProductPreview previewType={type} product={product}/>
        });
        return(
            <div className="product-row-container">
                <div className="p-row-subheader">
                    <p>{category}</p>
                    <p className="h-light-gray" id="p-row-see-more">See More</p>
                </div>
                <ul className="p-row">
                    {productsList}
                </ul>
            </div>
        );
    }
}

export default ProductRow;