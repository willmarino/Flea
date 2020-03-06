import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMListingsAdd from './dm_listings_add';
import { createShopProduct } from '../../../../../../actions/newest_shop_actions';

const msp = (state, ownProps) => {
  debugger;
  let shop = state.entities.shops[ownProps.match.params.shopId];
  return({
    shops : state.entities.shops,
    products : state.entities.products,
    shop : shop
  })
}

const mdp = dispatch => ({
  createShopProduct: (id, formData) => dispatch(createShopProduct(id, formData))
})

export default withRouter(connect(msp, mdp)(DMListingsAdd));