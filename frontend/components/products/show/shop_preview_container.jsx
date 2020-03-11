import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShopPreview from './shop_preview';
import { fetchProductsByShop } from '../../../actions/newest_product_actions';
import { fetchOrdersByShop } from '../../../actions/order_actions';

const msp = (state, ownProps) => {
  return({
    shopStarRating: ownProps.shopStarRating,
    shopReviewCount: ownProps.shopReviewCount,
    products : state.entities.products,
    shops : state.entities.shops,
    product : ownProps.product,
    orders :state.entities.orders,
    shop : ownProps.shop,
    curPath : ownProps.curPath,
    curProdId : ownProps.curProdId,
    currentUser : state.session.currentUser,
    loggedIn : Boolean(state.session.currentUser)
  })
};

const mdp = (dispatch) => ({
  fetchProductsByShop : (shopId, prodId, num) => dispatch(fetchProductsByShop(shopId, prodId, num)),
  fetchOrdersByShop : (id) => dispatch(fetchOrdersByShop(id))
});

export default withRouter(connect(msp, mdp)(ShopPreview));