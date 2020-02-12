import { connect } from 'react-redux';
import ShopShow from './shop_show';
import { fetchShop } from '../../actions/shop_actions';

const msp = (state, ownProps) => ({
  curShopId : ownProps.match.params.shopId,
  shop: state.entities.shops.curShop
})

const mdp = (dispatch) => ({
  fetchShop : (id) => dispatch(fetchShop(id))
})

export default connect(msp, mdp)(ShopShow);