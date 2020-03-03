import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShopManagerDash from './shop_manager_dash';

const msp = (state) => {
  return({
  })
  
};

export default withRouter(connect(msp, null)(ShopManagerDash));