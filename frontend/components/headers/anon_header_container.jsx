import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {fetchProducts} from '../../actions/product_actions';
import { fetchShops } from '../../actions/shop_actions';
import AnonHeader from './anon_header';


const mdp = dispatch => ({
  openModal: (dash) => dispatch(openModal(dash)),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
});

export default connect(null, mdp)(AnonHeader);