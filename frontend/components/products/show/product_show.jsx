import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: "",
            quantity: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        // create cart with info
    }
    
    update(field){
        return(
            e => this.setState({[field] : e.currentTarget.value})
        );
    }

    render(){
        // debugger;
        if(!this.props.product || !this.props.shop){
            return <p>Loading</p>
        }
        return(
            <div className="product-show-container">
                <div className="product">
                    <div className="photo-reviews">
                        <div className="photo">
                            <div className="mini-photos">
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                                <img src={this.props.product.photoURL} alt="" />
                            </div>

                            <img src={this.props.product.photoURL} alt=""/>
                        </div>
                        <div className="reviews">
                            <p>
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text
                                reviews text reviews text reviews text reviews text

                            </p>
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="buy-product">
                            <div className="top-bar">
                                <div>{this.props.shop.name}</div>
                                <div>Review</div>
                                <div>NumReviews</div>
                            </div>
                            <div className="product-title">{this.props.product.name}</div>
                            <div className="price">{this.props.product.price}</div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="select-size">
                                    <p>Size</p>
                                    <button className="product-dropdown" onChange={this.update("size")}></button>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <button className="product-dropdown" onChange={this.update("quantity")}></button>
                                </div>
                            </form>
                        </div>
                        <div className="details">
                            <p>detail</p>
                            <p>detail</p>
                            <p>detail</p>
                            <p>detail</p>
                            <p>detail</p>
                            <p>detail</p>
                        </div>
                    </div>


                </div>
                <div className="other-products">
                    <div id="section-one">
                        <p>By this shop</p>
                    </div>
                    <div id="section-two">
                        <p>Related</p>
                    </div>
                    <div id="section-three">
                        <p>Related</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductShow;