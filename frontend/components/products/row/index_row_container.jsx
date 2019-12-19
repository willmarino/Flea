import {connect} from 'react-redux';

import { fetchProducts } from '../../../actions/product_actions';
import { fetchShops } from '../../../actions/shop_actions';

import {categoryFilter, randomFilter} from '../../selectors/category_filter';
import IndexRow from './index_row';

const msp = (state, ownProps) => {
  // debugger;
  let fetchedProd = (ownProps.category) ? categoryFilter(state.entities.products, ownProps.category) : (Object.values(state.entities.products).slice(0, 6));
  return({
    products: fetchedProd,
    shops: state.entities.shops,
    type: ownProps.type,
    category: ownProps.category || "Popular Now",
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mdp = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
});



export default connect(msp, mdp)(IndexRow);