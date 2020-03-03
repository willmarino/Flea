import { connect } from 'react-redux';
import ShopManagerSidebarSales from './shop_manager_sidebar_sales';
import { receiveShopManagerChange } from '../../../../actions/shop_manager_actions';

const msp = (state) => {
  return({
    tab : state.ui.shopManager,
    shops : state.entities.shops
  })
};

const mdp = (dispatch) => ({
  receiveShopManagerChange : (change) => dispatch(receiveShopManagerChange(change))
});

export default connect(msp, mdp)(ShopManagerSidebarSales);