import { connect } from 'react-redux';
import ShopPreview from './shop_preview';
// import { fetchProductsByShop } from '../../../actions/product_actions';
import { fetchProductsByShop } from '../../../actions/newest_product_actions';

const msp = (state, ownProps) => {
  return({
    // shopProducts : state.entities.products.shopProducts,
    // shopProducts : state.entities.products.byShop,
    shopStarRating: ownProps.shopStarRating,
    shopReviewCount: ownProps.shopReviewCount,
    products : state.entities.products,
    shops : state.entities.shops,
    product : ownProps.product,
    shop : ownProps.shop,
    curPath : ownProps.curPath,
    curProdId : ownProps.curProdId,
    currentUser : state.session.currentUser,
    loggedIn : Boolean(state.session.currentUser)
  })
};

const mdp = (dispatch) => ({
  fetchProductsByShop : (shopId, prodId, num) => dispatch(fetchProductsByShop(shopId, prodId, num))
});

export default connect(msp, mdp)(ShopPreview);