import { connect } from 'react-redux';
import { fetchProductShow } from '../../../actions/product_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => {
    let curProdId = ownProps.match.params.prodId;
    return({
        shopReviewProducts : state.entities.products.byReviews,
        product: state.entities.products.main[curProdId],
        shop: state.entities.shops.byProducts.productShow,
        productReviews: state.entities.reviews.byProduct,
        productReviewAuthors : state.entities.users.productReviewAuthors,
        shopReviewAuthors : state.entities.users.shopReviewAuthors,
        shopReviews: state.entities.reviews.byShop,
        curProdId: curProdId,
        loggedIn: Boolean(state.session.currentUser),
        user: state.session.currentUser
    })
}

const mdp = dispatch => ({
    fetchProductShow: (id) => dispatch(fetchProductShow(id))
});


export default connect(msp, mdp)(ProductShow);