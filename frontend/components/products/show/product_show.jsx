import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                <li>{this.props.product.name}</li>
                <li>{this.props.product.high_level_category}</li>
            </ul>
        );
    }
}

export default ProductShow;