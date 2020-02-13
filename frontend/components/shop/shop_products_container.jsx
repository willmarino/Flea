import { connect } from 'react-redux';
import ShopProducts from './shop_products';


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
});

export default connect(msp, mdp)(ShopProducts);