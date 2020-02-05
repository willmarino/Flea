import {connect} from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import { fetchShops } from '../../../actions/shop_actions';
import {
  receiveCurCat
} from '../../../actions/current_categories_actions';
import {grabRow} from '../../selectors/category_filter';
import IndexRow from './index_row';

const msp = (state, ownProps) => {
  let products;
  // if(state.categories.currentCategories.length > 0){}
  debugger;
  products = grabRow(state.entities.products, state.categories.currentCategories[ownProps.rowId]);
  return({
    products: products,
    shops: state.entities.shops,
    type: ownProps.type,
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mdp = (dispatch) => ({
  receiveCurCat: (cat) => dispatch(receiveCurCat(cat)),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
});



export default connect(msp, mdp)(IndexRow);