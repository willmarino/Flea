import { connect } from 'react-redux';
import ShopManagerLanding from './shop_manager_landing';
import { fetchOwnedShops } from '../../actions/newest_shop_actions';

const msp = (state) => ({
  shops : state.entities.shops
});

const mdp = dispatch => ({
  fetchOwnedShops : () => dispatch(fetchOwnedShops())
});

export default connect(msp, mdp)(ShopManagerLanding);