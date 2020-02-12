import { connect } from 'react-redux';
import ShowRecommend from './show_recommend';
import { fetchAssociatedProducts } from '../../../actions/product_actions';

const msp = (state, ownProps) => {
  return({
    associatedProducts : state.entities.products.associated,
    shopProducts : state.entities.products.shopProducts,
    shops : state.entities.shops.shopsByAssociatedProducts,
    shop : ownProps.shop,
    loggedIn : ownProps.loggedIn,
    curProdId : ownProps.curProdId
  })
};

const mdp = dispatch => ({
  fetchAssociatedProducts: (prodId, shopProducts) => dispatch(fetchAssociatedProducts(prodId, shopProducts))
});

export default connect(msp, mdp)(ShowRecommend);