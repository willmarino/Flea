import { connect } from 'react-redux';
import OwnedShop from './owned_shop';
import { fetchOwnedShopView } from '../../actions/newest_shop_actions';

const msp = (state, ownProps) => {
  debugger;
  return({
    shops : state.entities.shops,
    products : state.entities.products,
    categories : state.entities.categories,
    pageLoaded : state.pageLoaded,
    curProdId : ownProps.match.params.prodId
  })
}

const mdp = (dispatch) => ({
  fetchOwnedShopView : (id) => dispatch(fetchOwnedShopView(id))
})

export default connect(msp, mdp)(OwnedShop);