import React from 'react';
import Review from '../../reviews/review';

class ProductShow extends React.Component{
    constructor(props){
        super(props);

        if(this.props.product && this.props.user){
            this.state = {
                title: "",
                body: "",
                rating: 0,
                // item_id: this.props.product.id,
                // author_id: this.props.user
                item_id: this.props.product.id,
                author_id: this.props.users[this.props.user]
            };
        }
        // debugger;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchProduct(this.props.match.params.prodId);
        // this.props.fetchProducts();
        // this.props.fetchShops();
        // this.props.fetchReviews();
        // this.props.fetchUsers();
    }


    handleSubmit(e){
        e.preventDefault();
        // debugger;
        this.props.createReview(this.state);
    }


    update(field){
        if(field === "rating"){
            return(
                e => this.setState({[field] : parseInt(e.currentTarget.value, 10)})
            );
        }
        return(
            e => this.setState({[field] : e.currentTarget.value})
        );
    }


    render(){
        // debugger;
        // if(!this.props.product || !this.props.shops || !this.props.reviews || !this.props.products || !this.props.users){
        //     return <p>Loading</p>;
        // }else if(Object.keys(this.props.users).length === 0){
        //     return <p>Loading</p>;
        // }
  
        let shop = this.props.shops[this.props.product.shop_id];

        let productRatings = [];
        let rating = 0;
        let count = 0;
        Object.values(this.props.reviews).forEach((r) => {
            if(r.item_id === this.props.product.id){
                // debugger;
                let author = (this.props.users)[r.author_id]
                productRatings.push(<Review review={r} author={author} product={this.props.product} key={r.id}/>)
                rating += r.rating;
                count += 1
            }
        })
        rating = Math.round(rating / count);
        let stars = [];
        let i = 0;
        while(i < rating){
            stars.push(<i className="fa fa-star" key={i}></i>)
            i += 1
        }

        let shopRatings = [];
        let j = 0;
        Object.values(this.props.reviews).forEach(r => {
            let prod = this.props.products[r.item_id];
            if(prod.shop_id === shop.id && shopRatings.length < 20){
                shopRatings.push(<Review review={r} product={prod} key={r.id}/>);
                j += 1;
            };
        })

        let reviewForm;
        if(this.props.loggedIn){
            reviewForm = (
                <form onSubmit={this.handleSubmit} className="review-form">
                    <div>
                        <p>Title</p>
                        <input type="text" onChange={this.update("title")} value={this.state.title}/>
                    </div>
                    <div>
                        <p>Body</p>
                        <textarea type="text" onChange={this.update("body")} value={this.state.body}/>
                    </div>
                    <div>
                        <p>Rating</p>
                        <input type="text" onChange={this.update("rating")} value={this.state.rating}/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            );
        }else{
            reviewForm = <p className="null"></p>;
        };


        // debugger;
        return(
            <div className="product-show-container">
                <div className="product">
                    <div className="photo-reviews">
                        <div className="photo">
                            <img src={this.props.product.photoURL} alt=""/>
                        </div>
                        <div className="reviews">
                            <div className="review-meta-info">
                                <p>Reviews</p>
                                <p>{stars}</p>
                                <p>({i})</p>
                            </div>
                            <div>
                                <div>
                                    <p>For this item</p>
                                    <p>({i})</p>
                                </div>
                                {/* <div>
                                    <p>For this shop</p>
                                    <p>({j})</p>
                                </div> */}
                            </div>
                            {reviewForm}

                            <div className="reviews-list">
                                {productRatings}
                            </div>
                            
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="buy-product">
                            <div className="top-bar">
                                <div className="gray-text">{shop.name}</div>
                                <div className="stars">{stars}</div>
                                <div className="review_count">({i})</div>
                            </div>
                            <div className="product-title">{this.props.product.name}</div>
                            <div className="price">{this.props.product.price}</div>
                            <div className="bestseller" id="showpage"><p>Bestseller</p></div>
                        </div>
                        <div className="details">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            accusantium doloremque laudantium, totam rem aperiam, eaque
                            ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit qui in ea voluptate velit
                            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                            quo voluptas nulla pariatur?
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