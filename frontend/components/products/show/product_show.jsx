import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.params.match.prodId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.prodId !== this.props.match.params.prodId){
            this.props.fetchProduct(this.props.parmas.match.prodId);            
        }
    }

    render(){
        // debugger;
        // console.log(this.props);
        return(
            <ul>
                <li>{this.props.product.name}</li>
                <li>{this.props.product.high_level_category}</li>
            </ul>
        );
    }
}

export default ProductShow;