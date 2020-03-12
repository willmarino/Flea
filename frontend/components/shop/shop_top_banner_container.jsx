import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShopTopBanner from './shop_top_banner';
import { createShopFavorite } from '../../actions/shop_favorite_actions';

const msp = (state, ownProps) => ({
  shop : ownProps.shop,
  curShopId : ownProps.curShopId,
  shopOwner : ownProps.shopOwner,
  currentUser : state.session.currentUser,
  sales : ownProps.sales,
  numReviews : ownProps.numReviews
});

const mdp = (dispatch) => ({
  createShopFavorite : (id) => dispatch(createShopFavorite(id))
});

export default withRouter(connect(msp, mdp)(ShopTopBanner))