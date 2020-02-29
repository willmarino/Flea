import { connect } from 'react-redux';
import ShopShow from './shop_show';
import { fetchShopShow } from '../../actions/newest_shop_actions';
import { addShopView } from '../../actions/shop_view_actions';

const msp = (state, ownProps) => {
  let curShopId = ownProps.match.params.shopId;
  return({
    shops : state.entities.shops,
    products : state.entities.products,
    users : state.entities.users,
    reviews : state.entities.reviews,
    categories : state.entities.categories,
    curShopId : curShopId,
    pageLoaded : state.pageLoaded
  })
}

const mdp = (dispatch) => ({
  fetchShopShow : (shopId) => dispatch(fetchShopShow(shopId)),
  addShopView : (shopId) => dispatch(addShopView(shopId))
})

export default connect(msp, mdp)(ShopShow);