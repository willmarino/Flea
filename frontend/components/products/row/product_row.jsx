import React from 'react';
import ProductPreview from '../product_preview/product_preview';

class ProductRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { rowOfProducts, type, loggedIn, category } = this.props;
        // let productsList = rowOfProducts.map((product) => {
        //     // return <IndexItem product={p} type={type} loggedIn={loggedIn} key={p.id}/>
        //     return <ProductPreview previewType={type} product={product}/>
        // });
        let firstHalfProductList = [];
        let secondHalfProductList = [];
        rowOfProducts.forEach((product, i) => {
            let p = <ProductPreview previewType={type} product={product} loggedIn={loggedIn}/>;
            if(i < (rowOfProducts.length / 2)){
                firstHalfProductList.push(p);
            }else{
                secondHalfProductList.push(p);
            }
        });
        firstHalfProductList = <ul className="p-row-half">{firstHalfProductList}</ul>
        secondHalfProductList = <ul className="p-row-half">{secondHalfProductList}</ul>
        return(
            <div className="product-row-container">
                <div className="p-row-subheader">
                    <p>{category}</p>
                    <p className="h-light-gray" id="p-row-see-more">See More</p>
                </div>
                <div className="p-row">
                    {/* {productsList} */}
                    {firstHalfProductList}
                    {secondHalfProductList}
                </div>
            </div>
        );
    }
}

export default ProductRow;