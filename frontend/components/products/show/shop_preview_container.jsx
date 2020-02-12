import { connect } from 'react-redux';
import ShopPreview from './shop_preview';
import { fetchProductsByShop } from '../../../actions/product_actions';

const msp = (state, ownProps) => ({
  loggedIn : Boolean(state.session.currentUser),
  currentUser : state.session.currentUser,
  shopProducts : state.entities.products.shopProducts,
  shop : ownProps.shop,
  shopReviewCount: ownProps.shopReviewCount,
  shopStarRating: ownProps.shopStarRating,
  curProdId : ownProps.curProdId,
  product : ownProps.product
});

const mdp = (dispatch) => ({
  fetchProductsByShop : (shopId, prodId=9999999, num=5) => dispatch(fetchProductsByShop(shopId, prodId, num))
});

export default connect(msp, mdp)(ShopPreview);