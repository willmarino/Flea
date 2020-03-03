import { connect } from 'react-redux';
import DMDashboardMain from './dm_dashboard_main';
import { fetchOwnedShopInfo } from '../../../../../../actions/newest_shop_actions';

const msp = state => ({
  views : state.entities.views,
  shopViews : state.entities.shopViews,
  orders : state.entities.orders,
  products : state.entities.products,
  pageLoaded : state.pageLoaded
})

const mdp = dispatch => ({
  fetchOwnedShopInfo : () => dispatch(fetchOwnedShopInfo())
})

export default connect(msp, mdp)(DMDashboardMain)