import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMListingsUpdate from './dm_update_listing';
import { fetchProduct, updateShopProduct } from '../../../../../../actions/newest_product_actions';

const msp = (state, ownProps) => {
  debugger;
  let curProdId = ownProps.match.params.prodId;
  return({
    product : state.entities.products[curProdId],
    curProdId : curProdId
  })
}

const mdp = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  updateShopProduct: (id, formData) => dispatch(updateShopProduct(id, formData))
})

export default withRouter(connect(msp, mdp)(DMListingsUpdate));