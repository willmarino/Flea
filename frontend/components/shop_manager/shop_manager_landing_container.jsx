import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShopManagerLanding from './shop_manager_landing';
import { fetchOwnedShops } from '../../actions/newest_shop_actions';

const msp = (state) => {
  return({
    shops : state.entities.shops
  })
};

const mdp = dispatch => ({
  fetchOwnedShops : () => dispatch(fetchOwnedShops())
});

export default withRouter(connect(msp, mdp)(ShopManagerLanding));