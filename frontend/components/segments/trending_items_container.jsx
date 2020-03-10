import { connect } from 'react-redux';
import TrendingItems from './trending_items';
import { fetchTrendingItems } from '../../actions/newest_shop_actions';

const msp = state => {
  debugger;
  return ({
    products: state.entities.products,
    shops: state.entities.shops,
    loggedIn: Boolean(state.session.currentUser)
  })
};

const mdp = dispatch => ({
  fetchTrendingItems: () => dispatch(fetchTrendingItems())
});

export default connect(msp, mdp)(TrendingItems);