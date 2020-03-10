import { connect } from 'react-redux';
import TrendingItems from './trending_items';

const msp = state => {
  debugger;
  return ({
    products: state.entities.products,
    shops: state.entities.shops,
    loggedIn: Boolean(state.session.currentUser)
  })
};

export default connect(msp, null)(TrendingItems);