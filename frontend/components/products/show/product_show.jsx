import React from 'react';
import Review from '../../reviews/review';
import { Link } from 'react-router-dom';
import AddToCartFormContainer from './add_to_cart_form_container';
import ShopPreviewContainer from './shop_preview_container';



class ProductShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tab: 'product',
            limit: 4,
            limitMessage: '+ More'
        };
        this.limitChanged = false;
        this.allReviewInfo = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchReviewDisplay = this.switchReviewDisplay.bind(this);
        this.starsify = this.starsify.bind(this);
        this.switchTabToProduct = this.switchTabToProduct.bind(this);
        this.switchTabToShop = this.switchTabToShop.bind(this);
        this.compileReviews = this.compileReviews.bind(this);
        this.allPresent = this.allPresent.bind(this);
    }

    componentDidMount(){
        this.props.fetchProductShow(this.props.curProdId);
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state);
    }

    switchTabToProduct(){
        this.setState({tab: 'product', limit: 4, limitMessage: '+ More'});
    }

    switchTabToShop(){
        this.setState({tab: 'shop', limit: 4, limitMessage: '+ More'});
    }

    switchReviewDisplay(){
        if(this.state.limit === 4){
            this.setState({limit: 20});
            this.setState({limitMessage: 'All Reviews'})
        }
        this.limitChanged = true;
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
        // let productAvg = 0;
        let productReviewCount = this.props.productReviews.length;
        for(let i = 0; i < ( (this.state.limit === ('all') || this.props.productReviews.length < this.state.limit) ? this.props.productReviews.length : this.state.limit); i++){
            let r = this.props.productReviews[i];
            // while(i < this.state.limit){
            productReviews.push(
                <Review review={r} author={this.props.productReviewAuthors[i]} product={this.props.product} key={r.id}/>
            );
            // }
            // productAvg += r.rating;
        }
        // productAvg = Math.round(productAvg / productReviewCount);

        let shopReviews = [];
        // let shopAvg = 0;
        let shopReviewCount = this.props.shopReviews.length;
        for(let i = 0; i < ( (this.state.limit === ('all') || this.props.shopReviews.length < this.state.limit) ? this.props.shopReviews.length : this.state.limit); i++){
            let r = this.props.shopReviews[i];
            shopReviews.push(
                <Review review={r} author={this.props.shopReviewAuthors[i]} product={this.props.shopReviewProducts[i]} key={r.id}/>
            );
            // shopAvg += r.rating;
        }
        // shopAvg = Math.round(shopAvg / shopReviewCount);

        return { 
            product: { reviews: productReviews, count: productReviewCount }, 
            shop: { reviews: shopReviews, count: shopReviewCount}
        };
    }

    allPresent(){
        if(this.props.shopReviewProducts &&
            this.props.product &&
            this.props.shop &&
            this.props.productReviews &&
            this.props.shopReviews &&
            this.props.shopReviewAuthors &&
            this.props.productReviewAuthors
            ){
                return true;
            }
        return false;
    }

    render(){
        if(!this.allPresent()){
            return <p></p>;
        }
        if(!this.allReviewInfo || this.limitChanged){
            this.allReviewInfo = this.compileReviews();
            this.productReviews = this.allReviewInfo.product.reviews;
            this.productAvg = this.starsify(Math.round(this.props.product.rating));
            this.pCount = this.allReviewInfo.product.count;
            this.shopReviews = this.allReviewInfo.shop.reviews;
            this.shopAvg = this.starsify(Math.round(this.props.shop.rating));
            this.sCount = this.allReviewInfo.shop.count;
        }

        let reviews;
        let rating;
        let count;
        if(this.state.tab === 'product'){
            reviews = this.productReviews;
            rating = this.productAvg;
            count = this.pCount;
        }else if(this.state.tab === 'shop'){
            reviews = this.shopReviews;
            rating = this.shopAvg;
            count = this.sCount;
        }

        let reviewDisplaySwitcher = (this.state.limitMessage === 'All Reviews') 
            ? <Link to='/anon'><button className='review-display-button'>{this.state.limitMessage}</button></Link> 
            : <button className='review-display-button' onClick={this.switchReviewDisplay}>{this.state.limitMessage}</button> ;

        this.limitChanged = false;
        return(
            <div className="product-show-container" id='prod-show'>
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
                                <div className='reviews-tab'>
                                    <p onClick={this.switchTabToProduct}>For this item</p>
                                    <p>{this.pCount}</p>
                                </div>
                                <div className='reviews-tab'>
                                    <p onClick={this.switchTabToShop}>For this shop</p>
                                    <p>{this.sCount}</p>
                                </div>
                            </div>

                            <div className="reviews-list">
                                {reviews}
                            </div>
                            <div>
                                {reviewDisplaySwitcher}
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <AddToCartFormContainer 
                            product={this.props.product}
                            shop={this.props.shop}
                            productAvg={this.productAvg}
                            pCount={this.pCount}
                            topLevelDoc={document.getElementById('prod-show')}/>
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
                <ShopPreviewContainer shop={this.props.shop} shopReviewCount={this.sCount} shopStarRating={this.shopAvg}/>
            </div>
        );
    }
}

export default ProductShow;





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


{/* <div className="other-products">
                    <div id="section-one">
                        <p>By this shop</p>
                    </div>
                    <div id="section-two">
                        <p>Related</p>
                    </div>
                    <div id="section-three">
                        <p>Related</p>
                    </div>
                </div> */}