import React from 'react';
import Review from '../../reviews/review';

class ProductShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tab: 'product'
        };

        // if(this.props.product && this.props.user){
            // this.state = {
                // title: "",
                // body: "",
                // rating: 0,
                // item_id: this.props.product.id,
                // author_id: this.props.user
                // item_id: this.props.product.id,
                // author_id: this.props.users[this.props.user]
                // tab: 'product'
            // };
        // }
        // this.tab = 'product';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.allPresent = this.allPresent.bind(this);
        this.starsify = this.starsify.bind(this);
        this.switchTabToProduct = this.switchTabToProduct.bind(this);
        this.switchTabToShop = this.switchTabToShop.bind(this);
    }

    componentDidMount(){
        if(!this.props.product) this.props.fetchProduct(this.props.curProdId);
        if(Object.keys(this.props.productReviews).length === 0) this.props.fetchReviewsByProduct(this.props.curProdId);
        if(Object.keys(this.props.users).length <= 1) this.props.fetchUsers();
        if(!this.props.shop && this.props.product) this.props.fetchShop(this.props.product.shop_id);
        if(this.props.shop && Object.keys(this.props.shopReviews).length === 0) this.props.fetchReviewsByShop(this.props.shop.id);
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state);
    }

    // handleClick(){
    //     if(this.state.tab === 'product'){
    //         this.setState({tab : 'shop'});
    //     }else if(this.state.tab === 'shop'){
    //         this.setState({tab: 'product'});
    //     }
    // }

    switchTabToProduct(){
        this.setState({tab: 'product'});
    }

    switchTabToShop(){
        this.setState({tab: 'shop'});
    }

    update(field){
        // if(field === "rating"){
        //     return(
        //         e => this.setState({[field] : parseInt(e.currentTarget.value, 10)})
        //     );
        // }
        return(
            e => this.setState({[field] : e.currentTarget.value})
        );
    }

    allPresent(){
        if(this.props.product && this.props.shop && Object.values(this.props.users).length !== 0 && Object.values(this.props.productReviews).length !== 0 && Object.values(this.props.shopReviews).length !== 0){
            return true;
        }else{
            return false;
        }
    }

    starsify(n){
        let stars = [];
            while(stars.length < n){
                stars.push(<i className="fa fa-star" key={stars.length}></i>)
            }
          return stars;
      }

    compileReviews(){
        let productReviews = [];
        let productAvg = 0;
        let productReviewCount = 0;
        for(let i = 0; i < this.props.productReviews.length; i++){
            let r = this.props.productReviews[i];
            productReviews.push(
                <Review review={r} author={this.props.users[r.author_id]} product={this.props.product} key={r.id}/>
            );
            productAvg += r.rating;
            productReviewCount += 1;
        }
        productAvg = Math.round(productAvg / productReviewCount);

        let shopReviews = [];
        let shopAvg = 0;
        let shopReviewCount = 0;
        for(let i = 0; i < this.props.shopReviews.length; i++){
            let r = this.props.shopReviews[i];
            shopReviews.push(
                <Review review={r} author={this.props.users[r.author_id]} product={this.props.product} key={r.id}/>
            );
            shopAvg += r.rating;
            shopReviewCount += 1;
        }
        shopAvg = Math.round(shopAvg / shopReviewCount);

        return { 
            product: { reviews: productReviews, avg: productAvg, count: productReviewCount }, 
            shop: { reviews: shopReviews, avg: shopAvg, count: shopReviewCount}};
    }

    render(){

        if(this.allPresent() !== true){
            return <p></p>;
        }

        // let productReviews = [];
        // let rating = 0;
        // let count = 0;
        // Object.values(this.props.reviews).forEach((r) => {
        //     if(r.item_id === this.props.product.id){
        //         let author = (this.props.users)[r.author_id];
        //         productReviews.push(<Review review={r} author={author} product={this.props.product} key={r.id}/>);
        //         rating += r.rating;
        //         count += 1;
        //     }
        // })
        // rating = Math.round(rating / count);
        // let stars = [];
        // let i = 0;
        // while(i < rating){
        //     stars.push(<i className="fa fa-star" key={i}></i>)
        //     i += 1
        // }

        // let shopRatings = ['this is a rating'];
        // let j = 0;
        // Object.values(this.props.reviews).forEach(r => {
        //     let prod = this.props.products[r.item_id];
        //     if(prod.shop_id === shop.id && shopRatings.length < 20){
        //         shopRatings.push(<Review review={r} product={prod} key={r.id}/>);
        //         j += 1;
        //     };
        // })
        let allReviewInfo = this.compileReviews();
        let productReviews = allReviewInfo.product.reviews;
        let productAvg = this.starsify(allReviewInfo.product.avg);
        let pCount = allReviewInfo.product.count;
        let shopReviews = allReviewInfo.shop.reviews;
        let shopAvg = this.starsify(allReviewInfo.shop.avg);
        let sCount = allReviewInfo.shop.count;

        let reviews;
        let rating;
        let count;
        if(this.state.tab === 'product' || !this.props.loggedIn){
            reviews = productReviews;
            rating = productAvg;
            count = pCount;
        }else if(this.state.tab === 'shop'){
            reviews = shopReviews;
            rating = shopAvg;
            count = sCount;
        }

        // let tabSwitcher = <p></p>
        // if(this.props.loggedIn){
        //     tabSwitcher = <div onClick={this.handleClick}>Shop Reviews</div>;
        // }
        
        // let reviewForm;
        // if(this.props.loggedIn){
        //     reviewForm = (
        //         <form onSubmit={this.handleSubmit} className="review-form">
        //             <div>
        //                 <p>Title</p>
        //                 <input type="text" onChange={this.update("title")} value={this.state.title}/>
        //             </div>
        //             <div>
        //                 <p>Body</p>
        //                 <textarea type="text" onChange={this.update("body")} value={this.state.body}/>
        //             </div>
        //             <div>
        //                 <p>Rating</p>
        //                 <input type="text" onChange={this.update("rating")} value={this.state.rating}/>
        //             </div>
        //             <input type="submit" value="submit"/>
        //         </form>
        //     );
        // }else{
        //     // reviewForm = <p className="null"></p>;
        //     reviewForm = <p></p>
        // };

        debugger;

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
                                <p>{rating}</p>
                                <p>{count}</p>
                            </div>
                            <div className='reviews-tabs'>
                                <div>
                                    <p onClick={this.switchTabToProduct}>For this item</p>
                                    <p>{pCount}</p>
                                </div>
                                <div>
                                    <p onClick={this.switchTabToShop}>For this shop</p>
                                    <p>{sCount}</p>
                                </div>
                            </div>
                            {/* {reviewForm} */}

                            <div className="reviews-list">
                                {reviews}
                            </div>
                            
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="buy-product">
                            <div className="top-bar">
                                <div className="gray-text">{this.props.shop.name}</div>
                                <div className="stars">{productAvg}</div>
                                <div className="review_count">({pCount})</div>
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