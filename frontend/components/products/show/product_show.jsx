import React from 'react';
import Review from '../../reviews/review';
import { Link } from 'react-router-dom';
import AddToCartFormContainer from './add_to_cart_form_container';
import ShopPreviewContainer from './shop_preview_container';
import ShowRecommendContainer from './show_recommend_container';

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
        this.updated = false;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchReviewDisplay = this.switchReviewDisplay.bind(this);
        this.starsify = this.starsify.bind(this);
        this.switchTabToProduct = this.switchTabToProduct.bind(this);
        this.switchTabToShop = this.switchTabToShop.bind(this);
        this.compileReviews = this.compileReviews.bind(this);
    }

    componentDidMount(){
        this.props.fetchProductShow(this.props.curProdId);
        this.props.addView(this.props.curProdId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.curProdId !== this.props.curProdId && prevProps.curPath.includes('/products/')){
            this.props.fetchProductShow(this.props.curProdId);
            window.scrollTo(0, 0);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state);
    }

    switchTabToProduct(){
        this.setState({tab: 'product', limit: 4, limitMessage: '+ More'});
        this.limitChanged = true;
    }

    switchTabToShop(){
        this.setState({tab: 'shop', limit: 4, limitMessage: '+ More'});
        this.limitChanged = true;
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
        let pReviews = this.props.reviews['productReviewIds'].map((id) => this.props.reviews[id]);
        let productReviewCount = pReviews.length;
        for(let i = 0; i < ( (this.state.limit === ('all') || pReviews.length < this.state.limit) ? pReviews.length : this.state.limit); i++){
            let r = pReviews[i];
            productReviews.push(
                <Review review={r} author={this.props.users[r.author_id]} product={this.props.products[r.item_id]} key={r.id}/>
            );
        }

        let shopReviews = [];
        let sReviews = this.props.reviews['shopReviewIds'].map((id) => this.props.reviews[id]).reverse();
        let shopReviewCount = sReviews.length;
        for(let i = 0; i < ( (this.state.limit === ('all') || sReviews.length < this.state.limit) ? sReviews.length : this.state.limit); i++){
            let r = sReviews[i];
            shopReviews.push(
                <Review review={r} author={this.props.users[r.author_id]} product={this.props.products[r.item_id]} key={r.id}/>
            );
        }
        return { 
            product: { reviews: productReviews, count: productReviewCount }, 
            shop: { reviews: shopReviews, count: shopReviewCount}
        };
    }

    allPresent(){
    }

    render(){

        if(
            !this.props.reviews.shopReviewIds ||
            !this.props.products[this.props.curProdId]
            ){
            return <p></p>;
        }
        let curProd = this.props.products[this.props.curProdId];
        let curShop = this.props.shops[curProd.shop_id];
        if(!this.allReviewInfo || this.limitChanged){
            this.allReviewInfo = this.compileReviews();
            this.productReviews = this.allReviewInfo.product.reviews;
            this.productAvg = this.starsify(Math.round(curProd.rating));
            this.pCount = this.allReviewInfo.product.count;
            this.shopReviews = this.allReviewInfo.shop.reviews;
            this.shopAvg = this.starsify(Math.round(curShop.rating));
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
                            <img src={curProd.photoURL} alt=""/>
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
                            product={curProd}
                            shop={curShop}
                            productAvg={this.productAvg}
                            pCount={this.pCount}
                            curPath={this.props.curPath}/>
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
                {/* preview of other products sold by shop that sells the product of the page the user is on */}
                <ShopPreviewContainer
                    shop={curShop}
                    shopReviewCount={this.sCount}
                    shopStarRating={this.shopAvg}
                    curProdId={this.props.curProdId}
                    curPath={this.props.curPath}
                    product={curProd}/>
                {/* products which are related to product which is showing, but not sold by shop featured in shop preview */}
                <ShowRecommendContainer
                    shop={curShop}
                    loggedIn={this.props.loggedIn}
                    product={curProd}
                    curPath={this.props.curPath}
                    curProdId={this.props.curProdId}/>
            </div>
        );
    }
}

export default ProductShow;