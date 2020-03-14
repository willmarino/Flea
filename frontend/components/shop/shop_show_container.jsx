import { connect } from 'react-redux';
import ShopShow from './shop_show';
import { fetchShopShow } from '../../actions/newest_shop_actions';
import { fetchOrdersByShop } from '../../actions/order_actions';
import { addShopView } from '../../actions/shop_view_actions';
import { createShopFavorite } from '../../actions/shop_favorite_actions';
import { fetchShopFavorites } from '../../actions/shop_favorite_actions';

const msp = (state, ownProps) => {
  let curShopId = ownProps.match.params.shopId;
  return({
    shops : state.entities.shops,
    products : state.entities.products,
    users : state.entities.users,
    reviews : state.entities.reviews,
    categories : state.entities.categories,
    shopFavorites : state.entities.shopFavorites,
    orders : state.entities.orders,
    curShopId : curShopId,
    pageLoaded : state.pageLoaded,
    currentUser : state.session.currentUser
  })
}

const mdp = (dispatch) => ({
  fetchShopShow : (shopId) => dispatch(fetchShopShow(shopId)),
  fetchOrdersByShop : (id) => dispatch(fetchOrdersByShop(id)),
  addShopView : (shopId) => dispatch(addShopView(shopId)),
  createShopFavorite : (sf) => dispatch(createShopFavorite(sf)),
  fetchShopFavorites : (id) => dispatch(fetchShopFavorites(id))
})

export default connect(msp, mdp)(ShopShow);