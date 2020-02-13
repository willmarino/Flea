import { connect } from 'react-redux';
import ShopShow from './shop_show';
import { fetchShopShow } from '../../actions/shop_actions';

const msp = (state, ownProps) => {
  let curShopId = ownProps.match.params.shopId;
  return({
    curShopId : curShopId,
    shop: state.entities.shops[curShopId],
    products: state.entities.products.shopProducts,
    shopOwner : state.entities.users.shopOwner
  })
}

const mdp = (dispatch) => ({
  fetchShopShow : (shopId) => dispatch(fetchShopShow(shopId))
})

export default connect(msp, mdp)(ShopShow);