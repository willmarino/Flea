import { connect } from 'react-redux';
import ShowRecommend from './show_recommend';
import { fetchAssociatedProducts } from '../../../actions/product_actions';

const msp = (state, ownProps) => {
  debugger;
  return({
    associatedProducts : state.entities.products.associated,
    shopProducts : state.entities.products.shopProducts,
    shop : ownProps.shop,
    loggedIn : ownProps.loggedIn
  })
};

const mdp = dispatch => ({
  fetchAssociatedProducts: (prodId, shopProducts) => dispatch(fetchAssociatedProducts(prodId, shopProducts))
});

export default connect(msp, mdp)(ShowRecommend);