import { connect } from 'react-redux';
import ShowRecommend from './show_recommend';
import { fetchAssociatedProducts } from '../../../actions/newest_product_actions';

const msp = (state, ownProps) => {
  return({
    products : state.entities.products,
    shops : state.entities.shops,
    shop : ownProps.shop,
    loggedIn : ownProps.loggedIn,
    curProdId : ownProps.curProdId,
    curPath : ownProps.curPath
  })
};

const mdp = dispatch => ({
  fetchAssociatedProducts: (prodId, shopProducts) => dispatch(fetchAssociatedProducts(prodId, shopProducts))
});

export default connect(msp, mdp)(ShowRecommend);