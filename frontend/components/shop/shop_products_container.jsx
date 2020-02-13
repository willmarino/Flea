import { connect } from 'react-redux';
import ShopProducts from './shop_products';
import { fetchShop } from '../../actions/shop_actions';
import { fetchProductsByShop } from '../../actions/product_actions';


const msp = (state, ownProps) => {
  let curShopId = ownProps.curShopId;
  return({
    curShopId : curShopId,
    shop: state.entities.shops.curShopId,
    products : ownProps.products,
    loggedIn : Boolean(state.session.currentUser)
  })
};

const mdp = (dispatch) => ({
  // fetchShop : (id) => dispatch(fetchShop(id))
  // fetchProductsByShop : (shopId, prodId=9999999, num=5) => dispatch(fetchProductsByShop(shopId, prodId, num))
});

export default connect(msp, mdp)(ShopProducts);