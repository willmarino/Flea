import { connect } from 'react-redux';
import ShopProducts from './shop_products';


const msp = (state, ownProps) => {
  let curShopId = ownProps.curShopId;
  return({
    shop : ownProps.shop,
    curShopId : curShopId,
    products : ownProps.products.shopProductIds.map((id) => ownProps.products[id]),
    categories : ownProps.categories,
    loggedIn : Boolean(state.session.currentUser),
    // shop: state.entities.shops.main,
    // categories : state.newcategories.shopShow
  })
};

export default connect(msp, null)(ShopProducts);