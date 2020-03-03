import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShopManagerSidebarMain from './shop_manager_sidebar_main';
import { receiveShopManagerChange } from '../../../../actions/shop_manager_actions';

const msp = (state) => ({
  // tab : state.ui.shopManager
});

const mdp = (dispatch) => ({
  receiveShopManagerChange : (change) => dispatch(receiveShopManagerChange(change))
});

export default withRouter(connect(msp, mdp)(ShopManagerSidebarMain));