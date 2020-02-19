import { connect } from 'react-redux';
import ShopManagerDash from './shop_manager_dash';

const msp = state => ({
  tab : state.ui.shopManager
});

export default connect(msp, null)(ShopManagerDash);