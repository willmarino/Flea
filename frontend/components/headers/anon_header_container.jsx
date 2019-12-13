import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {fetchProducts} from '../../actions/product_actions';
import AnonHeader from './anon_header';


const mdp = dispatch => ({
  openModal: (dash) => dispatch(openModal(dash)),
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(null, mdp)(AnonHeader);