import React from 'react';
import ProductPreview from '../product_preview/product_preview';

class ProductRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { rowOfProducts, type, loggedIn, category } = this.props;
        let firstHalfProductList = [];
        let secondHalfProductList = [];
        rowOfProducts.forEach((product, i) => {
            let p = <ProductPreview previewType={type} product={product} loggedIn={loggedIn} key={product.name}/>;
            if(i < (rowOfProducts.length / 2)){
                firstHalfProductList.push(p);
            }else{
                secondHalfProductList.push(p);
            }
        });
        firstHalfProductList = <ul className="p-row-half">{firstHalfProductList}</ul>
        secondHalfProductList = <ul className="p-row-half">{secondHalfProductList}</ul>
        let header = null;
        if(category){
            header = (
                <div className="p-row-subheader">
                    <p>{category}</p>
                    <p className="h-light-gray" id="p-row-see-more">See More</p>
                </div>
            )
        }
        return(
            <div className="product-row-container">
                {header}
                <div className="p-row">
                    {firstHalfProductList}
                    {secondHalfProductList}
                </div>
            </div>
        );
    }
}

export default ProductRow;