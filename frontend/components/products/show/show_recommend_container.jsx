import { connect } from 'react-redux';
import ShowRecommend from './show_recommend';
import { fetchAssociatedProducts } from '../../../actions/products/products_by_association_actions';

const msp = (state, ownProps) => {
  return({
    associatedProducts : state.entities.products.byAssociation,
    // shopProducts : state.entities.products.shopProducts,
    shopProducts : state.entities.products.byShop,
    shops : state.entities.shops.byProducts.shopsByAssociatedProducts,
    shop : ownProps.shop,
    loggedIn : ownProps.loggedIn,
    curProdId : ownProps.curProdId
  })
};

const mdp = dispatch => ({
  fetchAssociatedProducts: (prodId, shopProducts) => dispatch(fetchAssociatedProducts(prodId, shopProducts))
});

export default connect(msp, mdp)(ShowRecommend);