import { connect } from 'react-redux';
import RecentlyViewed from './recently_viewed';

const msp = (state) => ({
  products : state.entities.products,
  // recentlyViewedProducts : state.entities.products.main.recentlyViewed,
  // categories : state.newcategories.forRecentProducts,
  loggedIn : Boolean(state.session.currentUser)
});

export default connect(msp, null)(RecentlyViewed);