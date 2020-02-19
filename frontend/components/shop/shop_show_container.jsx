import { connect } from 'react-redux';
import ShopShow from './shop_show';
import { fetchShopShow } from '../../actions/shop_actions';
import { addShopView } from '../../actions/shop_view_actions';

const msp = (state, ownProps) => {
  let curShopId = ownProps.match.params.shopId;
  return({
    curShopId : curShopId,
    shop: state.entities.shops.main,
    products: state.entities.products.byShop,
    shopOwner : state.entities.users.shopOwner,
    reviews : state.entities.reviews.byShop,
    reviewAuthors : state.entities.users.shopReviewAuthors,
    reviewProducts : state.entities.products.byReviews,
    reviewTags : state.entities.tags.shopReviewTags
  })
}

const mdp = (dispatch) => ({
  fetchShopShow : (shopId) => dispatch(fetchShopShow(shopId)),
  addShopView : (shopId) => dispatch(addShopView(shopId))
})

export default connect(msp, mdp)(ShopShow);