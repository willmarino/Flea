import { connect } from 'react-redux';
import ShopManagerLanding from './shop_manager_landing';
import { fetchOwnedShops } from '../../actions/shop/main_shop_actions';

const msp = (state, ownProps) => ({
  ownedShops : state.entities.shops.main.ownedShops
});

const mdp = dispatch => ({
  fetchOwnedShops : () => dispatch(fetchOwnedShops())
});

export default connect(msp, mdp)(ShopManagerLanding);