import {connect} from 'react-redux';

import { fetchProducts } from '../../../actions/product_actions';
import { fetchShops } from '../../../actions/shop_actions';

import categoryFilter from '../../selectors/category_filter';
import IndexRow from './index_row';

const msp = (state, ownProps) => {
  // debugger;
  return({
    products: categoryFilter(state.entities.products, ownProps.category),
    shops: state.entities.shops,
    type: ownProps.type
  });
};

const mdp = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
});



export default connect(msp, mdp)(IndexRow);