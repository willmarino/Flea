import { connect } from 'react-redux';
import ProductShow from './product_show';
// import { fetchProductShow } from '../../../actions/product_actions';
import { fetchProductShow } from '../../../actions/newest_product_actions';
import { addView } from '../../../actions/view_actions';

const msp = (state, ownProps) => {
    let curProdId = ownProps.match.params.prodId;
    return({
        // shopReviewProducts : state.entities.products.byReviews,
        // product: state.entities.products.main[curProdId],
        // shop: state.entities.shops.byProducts.productShow,
        // productReviews: state.entities.reviews.byProduct,
        // productReviewAuthors : state.entities.users.productReviewAuthors,
        // shopReviewAuthors : state.entities.users.shopReviewAuthors,
        // shopReviews: state.entities.reviews.byShop,
        products: state.entities.products,
        shops: state.entities.shops,
        reviews: state.entities.reviews,
        users: state.entities.users,
        curPath: ownProps.location.pathname,
        curProdId: curProdId,
        loggedIn: Boolean(state.session.currentUser),
        user: state.session.currentUser
    })
}

const mdp = dispatch => ({
    fetchProductShow: (id) => dispatch(fetchProductShow(id)),
    addView : (id) => dispatch(addView(id))
});


export default connect(msp, mdp)(ProductShow);