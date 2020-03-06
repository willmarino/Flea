import { connect } from 'react-redux';
import DMListings from './dm_listings';
import { fetchOwnedShopListings } from '../../../../../../actions/newest_shop_actions';

const msp = (state) => {
  return({
    shops: state.entities.shops,
    products: state.entities.products
  })
}

const mdp = (dispatch) => ({
  fetchOwnedShopListings: (id) => dispatch(fetchOwnedShopListings(id))
})

export default connect(msp, mdp)(DMListings);