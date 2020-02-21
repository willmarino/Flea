import { connect } from 'react-redux';
import ShopProducts from './shop_products';


const msp = (state, ownProps) => {
  let curShopId = ownProps.curShopId;
  return({
    curShopId : curShopId,
    shop: state.entities.shops.main,
    products : ownProps.products,
    loggedIn : Boolean(state.session.currentUser),
    categories : state.newcategories.shopShow
  })
};

const mdp = (dispatch) => ({
});

export default connect(msp, mdp)(ShopProducts);