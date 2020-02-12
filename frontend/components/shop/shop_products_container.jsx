import { connect } from 'react-redux';
import ShopProducts from './shop_products';
import { fetchShop } from '../../actions/shop_actions';
import { fetchProductsByShop } from '../../actions/product_actions';


const msp = (state, ownProps) => ({
  curShopId : ownProps.match.params.shopId,
  shop: state.entities.shops.curShop,
  products : state.entities.shops.shopProducts
});

const mdp = (dispatch) => ({
  fetchShop : (id) => dispatch(fetchShop(id)),
  fetchProductsByShop : (shopId, prodId=9999999, num=5) => dispatch(fetchProductsByShop(shopId, prodId, num))
});

export default connect(msp, mdp)(ShopProducts);