import { connect } from 'react-redux';
import ShopManagerSidebarMain from './shop_manager_sidebar_main';
import { receiveShopManagerChange } from '../../../../actions/shop_manager_actions';

const msp = (state) => ({
  tab : state.ui.shopManager
});

const mdp = (dispatch) => ({
  receiveShopManagerChange : (change) => dispatch(receiveShopManagerChange(change))
});

export default connect(msp, mdp)(ShopManagerSidebarMain);